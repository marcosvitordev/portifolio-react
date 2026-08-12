# Marcos Vitor — Portfólio

Portfólio profissional de **Marcos Vitor**, Analista de Sistemas e Desenvolvedor Full Stack. A aplicação apresenta trajetória, formação, tecnologias e projetos reais em uma experiência responsiva, acessível e preparada para temas claro e escuro.

[Acessar portfólio](https://marcosvitordev.netlify.app/) · [Reportar problema](https://github.com/marcosvitordev/portifolio-react/issues)

![Retrato de Marcos Vitor](public/marcos-vitor.png)

## Funcionalidades

- tema claro/escuro com preferência do sistema, troca manual, persistência e prevenção de flash;
- navegação sticky, menu mobile, scroll spy, deep links e atalho para o conteúdo;
- seções de experiência e formação baseadas no currículo existente;
- tecnologias organizadas por categoria, com filtros e descrições;
- projetos com busca, categorias, ordenação, destaques e estado vazio;
- modal acessível com `Escape`, foco cíclico, clique externo e restauração de foco;
- formulário com validação, loading, sucesso, erro, honeypot e bloqueio de envio duplicado;
- SEO com canonical, Open Graph, Twitter Cards, sitemap, robots e JSON-LD;
- code splitting para Projetos e Contato;
- pipeline de qualidade para formatação, lint, testes e build.

## Stack

| Camada    | Tecnologias                    |
| --------- | ------------------------------ |
| Interface | React 19, TypeScript, CSS      |
| Build     | Vite                           |
| Ícones    | Lucide React                   |
| Contato   | EmailJS                        |
| Testes    | Vitest, Testing Library, jsdom |
| Qualidade | ESLint, Prettier, EditorConfig |
| CI        | GitHub Actions                 |

## Estrutura

```text
src/
├── assets/          # imagens, screenshots e currículo
├── components/
│   ├── common/      # controles e elementos compartilhados
│   ├── contact/     # formulário de contato
│   ├── layout/      # header e footer
│   ├── projects/    # cards, filtros e modal
│   └── sections/    # seções da página
├── constants/       # configuração pública do site
├── data/            # conteúdo tipado do portfólio
├── hooks/           # tema, filtros, scroll e preferências
├── services/        # integração com EmailJS
├── styles/          # tokens, base, componentes e breakpoints
├── tests/           # testes unitários e de interação
├── types/           # contratos do domínio
└── utils/           # validação e funções puras
```

Detalhes adicionais estão em [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Desenvolvimento local

### Requisitos

- Node.js 22.12 ou superior;
- npm 10 ou superior.

### Instalação

```bash
git clone https://github.com/marcosvitordev/portifolio-react.git
cd portifolio-react
npm ci
cp .env.example .env
npm run dev
```

No PowerShell, copie o ambiente com:

```powershell
Copy-Item .env.example .env
```

### EmailJS

Preencha o `.env` local. Nunca versione esse arquivo.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Sem essas variáveis, o portfólio continua funcionando e orienta o visitante a usar o e-mail direto.

## Scripts

| Comando                          | Finalidade                              |
| -------------------------------- | --------------------------------------- |
| `npm run dev`                    | servidor Vite para desenvolvimento      |
| `npm run build`                  | TypeScript estrito e bundle de produção |
| `npm run preview`                | prévia local do build                   |
| `npm run lint`                   | análise estática sem warnings           |
| `npm run format`                 | formata os arquivos suportados          |
| `npm run format:check`           | valida a formatação                     |
| `npm run test:run`               | executa a suíte uma vez                 |
| `npm run check`                  | formatação, lint, testes e build        |
| `npm run audit:history -- <SHA>` | audita commits após uma base            |

## Responsividade

O layout foi projetado com comportamento fluido e revisado nos pontos de referência de 320, 375, 425, 768, 1024, 1280, 1440 e 1920 px. Containers, grids, navegação, formulários e modais evitam larguras fixas que gerem scroll horizontal.

## Acessibilidade

- landmarks e hierarquia de headings;
- navegação completa por teclado;
- foco visível e skip link;
- labels, estados `aria-*` e mensagens ao vivo no formulário;
- nomes acessíveis para links e botões com ícone;
- modal com gerenciamento de foco;
- contraste para temas claro e escuro;
- respeito a `prefers-reduced-motion`.

Consulte [docs/ACCESSIBILITY.md](docs/ACCESSIBILITY.md) para a estratégia e o checklist manual.

## SEO e performance

Metadados sociais, canonical, robots, sitemap e schemas `Person`/`WebSite` ficam em `index.html` e `public/`. Imagens possuem dimensões e textos alternativos; conteúdos abaixo da dobra usam lazy loading; as seções mais pesadas têm chunks independentes; fontes usam preconnect.

## Testes e build

```bash
npm run test:run
npm run lint
npm run build
```

A suíte cobre Header, ThemeToggle, Hero, ProjectCard, ProjectFilters, Projects, modal, formulário e validação.

## Deploy

O repositório contém `_redirects` e `_headers` compatíveis com Netlify. O pipeline não realiza deploy automático: publicação e credenciais permanecem sob controle do proprietário.

## Histórico da modernização

Esta versão substitui incrementalmente a base Create React App por React + Vite + TypeScript. Os commits da modernização foram criados com datas reais de execução. O projeto **não usa datas retroativas para representar atividade anterior**; consulte [CHANGELOG.md](CHANGELOG.md) e [docs/HISTORY.md](docs/HISTORY.md).

## Roadmap

- [ ] definir e documentar a licença do projeto;
- [ ] criar uma imagem social dedicada em proporção 1.91:1;
- [ ] avaliar métricas de produção após a próxima publicação;
- [ ] ampliar os detalhes de projetos quando novos dados verificáveis estiverem disponíveis.

## Autor

**Marcos Vitor** · [GitHub @marcosvitordev](https://github.com/marcosvitordev)

## Licença

O repositório ainda não possui uma licença definida. Até que o proprietário escolha e adicione uma licença explícita, nenhum direito de reutilização é concedido por padrão.
