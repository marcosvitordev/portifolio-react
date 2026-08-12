# Acessibilidade

## Implementado

- idioma `pt-BR` e landmarks semânticos;
- skip link para `main-content`;
- hierarquia de headings por seção;
- links externos com nomes descritivos;
- botões reais para ações e links reais para navegação;
- foco visível em controles interativos;
- menu móvel com `aria-expanded` e fechamento por Escape;
- filtros com `aria-pressed` e contagem anunciável;
- formulário com labels, `aria-invalid`, mensagens associadas e status ao vivo;
- modal com `role="dialog"`, `aria-modal`, foco inicial, trap de foco, Escape e restauração;
- alternativas textuais para imagens de conteúdo;
- animações desativadas com `prefers-reduced-motion`;
- temas com cores semânticas próprias.

## Checklist manual recomendado

1. percorrer a página inteira somente com Tab e Shift+Tab;
2. abrir o menu mobile e o modal, validar Escape e retorno de foco;
3. testar zoom do navegador em 200%;
4. verificar contraste após alterações de cores;
5. navegar com leitor de tela em headings, landmarks e formulário;
6. testar os estados de erro, loading e sucesso do contato;
7. confirmar que conteúdo não depende exclusivamente de cor.

## Regressões

Componentes interativos devem receber testes de comportamento. Mudanças visuais devem ser revisadas nos temas claro/escuro e com reduced motion ativo.
