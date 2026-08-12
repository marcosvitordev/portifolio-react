# Histórico da modernização

O portfólio começou com Create React App e componentes JSX que misturavam dados, apresentação e integrações. Em 12 de agosto de 2026, o projeto foi modernizado incrementalmente para React, Vite e TypeScript, preservando o histórico anterior em Git e uma branch local de segurança.

## Proveniência dos commits

Os commits criados durante a modernização usam as datas reais em que as alterações foram executadas. Não foram usados commits vazios, mudanças artificiais ou datas retroativas para construir um gráfico de atividade.

O script `scripts/audit-commit-history.mjs` permite inspecionar qualquer intervalo de commits de forma reproduzível:

```bash
npm run audit:history -- <BASE_SHA> --from 2026-02-12 --to 2026-07-01 --timezone -05:00
```

Ele mostra total, primeira/última data, dias ativos, distribuição mensal/diária, datas fora do intervalo e commits sem arquivos alterados. Um resultado `REVISAR` é esperado quando o intervalo solicitado não corresponde às datas reais do trabalho.

## Preservação

- SHA-base anterior à modernização: `1b7bd53046a33dd3f2215b23b71a4cff66622883`;
- branch local de segurança: `backup/portfolio-before-modernization`;
- nenhum commit anterior foi reescrito;
- nenhum reset destrutivo, rebase da `main` ou force push foi utilizado.
