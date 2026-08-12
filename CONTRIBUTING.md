# Contribuindo

Obrigado pelo interesse em melhorar o portfólio.

## Ambiente local

1. use Node.js compatível com `package.json`;
2. execute `npm ci`;
3. copie `.env.example` para `.env` somente se precisar testar EmailJS;
4. execute `npm run dev`.

## Branches

Use nomes curtos e descritivos:

- `feat/project-case-study`;
- `fix/mobile-navigation`;
- `docs/deployment-guide`.

## Código

- preserve TypeScript estrito e evite `any`;
- mantenha conteúdo factual em `src/data/`;
- não adicione URLs placeholder ou informações profissionais não verificadas;
- prefira recursos nativos antes de instalar dependências;
- preserve navegação por teclado, foco visível e reduced motion;
- nunca versione `.env`, tokens ou segredos.

## Commits

Use Conventional Commits, por exemplo:

```text
feat(projects): add technology filter
fix(contact): preserve form values after delivery error
a11y(modal): restore trigger focus on close
docs: document local environment variables
```

Cada commit deve representar uma mudança lógica e não vazia. Não altere datas Git para simular atividade passada.

## Verificação

Antes de abrir um pull request:

```bash
npm run check
```

Inclua no PR o motivo da mudança, comportamento esperado, evidências visuais quando necessário e os testes realizados.
