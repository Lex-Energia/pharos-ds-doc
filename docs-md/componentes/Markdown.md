---
title: "Markdown"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Markdown"
source: /componentes/Markdown
---

# Markdown

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Renderiza uma string markdown como componentes estilizados do Pharos. Use Markdown para conteúdo gerado por usuários, respostas de IA e documentação; ele trata headings, listas, tabelas, code blocks e citações com estilização consistente.

## Importação

```tsx
import {Markdown} from '@pharos-ds/core/Markdown';
```

## Exemplos

### Área interativa

```tsx
import {Markdown} from '@pharos-ds/core/Markdown';

<Markdown
  children="# Título

Texto **negrito** e _itálico_.

- Item um
- Item dois"
  display="block"
  density="default"
  citationStyle="label"
  isStreaming={false}
 />
```

Valores explorados na demo interativa:

- `display`: `block` · `inline` (padrão `block`)
- `density`: `default` · `compact` (padrão `default`)
- `citationStyle`: `label` · `number` (padrão `label`)
- `isStreaming`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Defina headingLevelStart para corresponder à hierarquia da página, ex.: comece em 3 se o markdown estiver dentro de uma seção h2.
- **Faça:** Use contentWidth para manter a prosa em um comprimento de linha legível em layouts largos.
- **Faça:** Use inlinePlugins para padrões shorthand personalizados como refs de issue, refs de diff e mentions em vez de pré-processar a string markdown.
- **Evite:** Use Markdown para layouts escritos manualmente; use Text e Heading diretamente quando você controla o conteúdo.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `string` | sim | — | A string markdown a renderizar. |
| `display` | `'block' \| 'inline'` | não | `'block'` | Tipo de display. Markdown usa block como padrão. Use 'inline' para spans markdown embutidos dentro de texto. |
| `density` | `'default' \| 'compact'` | não | `'default'` | Controla espaçamento entre elementos de nível de bloco. |
| `headingLevelStart` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | não | `1` | O nível de heading HTML ao qual markdown # mapeia. Desloca todos os níveis de heading para baixo para caber na hierarquia da página ao redor. Níveis que excedem h6 são limitados a h6. |
| `isStreaming` | `boolean` | não | `false` | Habilita modo streaming; usa parsing incremental e animação de fade-in suave para entrega de texto chunk a chunk. |
| `onLinkClick` | `(href: string, event: MouseEvent) => void \| false` | não | — | Handler para cliques em links. Retorne false para impedir o comportamento de navegação padrão. |
| `sources` | `Record<string, MarkdownSource>` | não | — | Fontes de citação indexadas por ID. Quando fornecidas, marcadores [id] e 【id】 no markdown que correspondem a uma chave são renderizados como chips de citação. |
| `citationStyle` | `'label' \| 'number'` | não | `'label'` | Como citações são exibidas inline. 'label' mostra um chip com título da fonte, ícone e borda. 'number' mostra um badge numerado compacto. |
| `contentWidth` | `number \| string` | não | `680` | Largura máxima para conteúdo de prosa (parágrafos, headings, listas, blockquotes). Tabelas e code blocks não são restritos e podem expandir para a largura total do container. Use para comprimentos de linha legíveis em layouts largos. |
| `contentAlign` | `'start' \| 'center'` | não | `'start'` | Alinhamento do conteúdo de prosa dentro do container quando contentWidth é mais estreito que o espaço disponível. |
| `inlinePlugins` | `MarkdownInlinePlugin[]` | não | — | Transforma correspondências regex em text nodes parseados em elementos React inline personalizados. Use para refs de issue, refs de diff, mentions e outros padrões shorthand. Inline code e fenced code blocks não são afetados. |
| `autolink` | `'gfm'` | não | — | Autolinking opt-in de URLs e emails simples. 'gfm' aplica regras autolink-literal do GitHub-Flavored Markdown: https?://..., www...., <scheme:url>, <email> e user@host simples viram links. Pontuação final de frase e parênteses de fechamento desbalanceados são excluídos; correspondências dentro de code spans, code blocks, links existentes e alt text de imagem são ignoradas. Comportamento padrão (opção não definida) permanece inalterado. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |
| `className` | `string` | não | — | Nome de classe CSS para o elemento raiz. Prefira xstyle para estilização; className é fornecido para integração com sistemas não-StyleX. |
| `style` | `CSSProperties` | não | — | Estilos inline para o elemento raiz. Prefira xstyle para estilização; estilos inline contornam a otimização StyleX. |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Markdown` · Docs atualizadas: `npx @pharos-ds/cli component Markdown`
