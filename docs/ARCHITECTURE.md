# Arquitetura

## Visão geral

A aplicação é uma SPA de portfólio com uma única página, dados estáticos tipados e integração externa opcional apenas para contato.

```text
Dados tipados ──> Seções React ──> App/layout ──> Vite build
                      │
Hooks e utilitários ──┤
                      │
EmailJS <── service <── Formulário
```

## Decisões

### Dados fora da interface

Projetos, tecnologias, navegação, experiência, formação e canais sociais vivem em `src/data/`. Isso reduz duplicação e permite validar contratos sem percorrer JSX.

### Tipos de domínio

`src/types/portfolio.ts` centraliza os contratos pedidos pelo portfólio. Campos opcionais evitam inventar datas, demos e URLs quando a informação não está disponível.

### CSS interno

O design system usa variáveis em `tokens.css`. As outras folhas separam base, componentes, seções e breakpoints. A aplicação não depende de framework visual.

### Estado local

O estado é pequeno e próximo de quem o consome. Hooks reutilizáveis encapsulam tema, scroll spy, deep links, reduced motion e filtros de projetos. Não há necessidade de store global.

### Integração de contato

O serviço em `src/services/email.ts` lê apenas variáveis Vite. O formulário aplica validação local, honeypot e intervalo mínimo entre envios. Falhas não apagam os dados digitados.

### Carregamento

Projetos e Contato são carregados com `React.lazy`, criando chunks separados. Imagens abaixo da dobra usam `loading="lazy"`; o retrato principal informa dimensões e prioridade.

## Fluxo de qualidade

O comando `npm run check` valida formatação, ESLint, Vitest e build TypeScript/Vite. O GitHub Actions repete o mesmo conjunto em pushes e pull requests para `main`.
