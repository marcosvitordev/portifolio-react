# Changelog

Todas as mudanças relevantes deste projeto são documentadas aqui.

## [2.0.0] — 2026-08-12

### Adicionado

- arquitetura React + Vite + TypeScript com tipos de domínio;
- design system com tokens, temas claro/escuro e preferência persistente;
- navegação responsiva, scroll spy, skip link e deep links;
- seções Hero, Sobre, Experiência, Formação e cursos complementares;
- tecnologias categorizadas e filtráveis;
- busca, filtros, ordenação, destaques e modal de projetos;
- formulário acessível com validação, feedback e integração segura com EmailJS;
- SEO, dados estruturados, sitemap, robots e metadados sociais;
- testes de interação, ESLint, Prettier, EditorConfig e GitHub Actions;
- documentação de arquitetura, acessibilidade e contribuição.

### Alterado

- migração incremental do Create React App para Vite;
- conteúdo estático movido dos componentes para módulos tipados;
- visual redesenhado para uma identidade de engenharia de software;
- projetos com URLs placeholder passaram a informar indisponibilidade;
- currículo mais recente mantido como única versão pública.

### Removido

- `react-scripts`, `emailjs-com` e dependências redundantes;
- implementação JSX/CSS antiga e listeners globais por renderização;
- assets e arquivos residuais do template original;
- credenciais EmailJS fixas no componente.

> Nota de transparência: esta modernização foi executada em 12 de agosto de 2026. O histórico não foi retrodatado para simular datas de desenvolvimento anteriores.
