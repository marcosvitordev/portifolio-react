import { execFileSync } from 'node:child_process';

const DEFAULTS = {
  from: '2026-02-12',
  to: '2026-07-01',
  timezone: '-05:00',
};

const args = process.argv.slice(2);
const readOption = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const positionalBase = args.find((argument) => !argument.startsWith('--'));
const base = readOption('base', positionalBase);
const from = readOption('from', DEFAULTS.from);
const to = readOption('to', DEFAULTS.to);
const timezone = readOption('timezone', DEFAULTS.timezone);

if (!base) {
  console.error(
    'Uso: npm run audit:history -- <BASE_SHA> [--from AAAA-MM-DD] [--to AAAA-MM-DD] [--timezone -05:00]',
  );
  process.exit(1);
}

const git = (...commandArgs) =>
  execFileSync('git', commandArgs, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();

try {
  git('rev-parse', '--verify', `${base}^{commit}`);
} catch {
  console.error(`Base inválida ou não encontrada: ${base}`);
  process.exit(1);
}

const rawLog = git(
  'log',
  `${base}..HEAD`,
  '--reverse',
  '--pretty=format:%H%x1f%aI%x1f%cI%x1f%s%x1e',
);

const commits = rawLog
  ? rawLog
      .split('\x1e')
      .map((record) => record.trim())
      .filter(Boolean)
      .map((record) => {
        const [hash = '', authorDate = '', commitDate = '', subject = ''] = record.split('\x1f');
        return { hash, authorDate, commitDate, subject };
      })
  : [];

const start = `${from}T00:00:00${timezone}`;
const end = `${to}T23:59:59${timezone}`;
const invalidDates = commits.filter(({ authorDate, commitDate }) => {
  const authorDay = authorDate.slice(0, 10);
  const commitDay = commitDate.slice(0, 10);
  return (
    authorDay < from ||
    authorDay > to ||
    commitDay < from ||
    commitDay > to ||
    !authorDate.endsWith(timezone) ||
    !commitDate.endsWith(timezone)
  );
});

const emptyCommits = commits.filter(
  ({ hash }) => !git('diff-tree', '--no-commit-id', '--name-only', '-r', hash),
);
const days = new Map();
const months = new Map();

for (const commit of commits) {
  const day = commit.authorDate.slice(0, 10);
  const month = day.slice(0, 7);
  days.set(day, (days.get(day) ?? 0) + 1);
  months.set(month, (months.get(month) ?? 0) + 1);
}

console.log('AUDITORIA DO HISTÓRICO');
console.log(`Base: ${base}`);
console.log(`Commits novos: ${commits.length}`);
console.log(`Período esperado: ${start} — ${end}`);
console.log(`Primeiro commit: ${commits[0]?.authorDate ?? 'n/a'}`);
console.log(`Último commit: ${commits.at(-1)?.authorDate ?? 'n/a'}`);
console.log(`Dias ativos: ${days.size}`);
console.log(`Datas inválidas: ${invalidDates.length}`);
console.log(`Commits vazios: ${emptyCommits.length}`);

console.log('\nCommits por mês:');
for (const [month, count] of [...months].sort()) console.log(`  ${month}: ${count}`);

console.log('\nCommits por dia:');
for (const [day, count] of [...days].sort()) console.log(`  ${day}: ${count}`);

if (invalidDates.length) {
  console.log('\nDatas fora do intervalo ou fuso:');
  for (const commit of invalidDates) {
    console.log(
      `  ${commit.hash.slice(0, 8)} | ${commit.authorDate} | ${commit.commitDate} | ${commit.subject}`,
    );
  }
}

const ok = commits.length > 0 && invalidDates.length === 0 && emptyCommits.length === 0;
console.log(`\nStatus: ${ok ? 'OK' : 'REVISAR'}`);
process.exitCode = ok ? 0 : 2;
