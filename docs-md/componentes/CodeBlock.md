---
title: "CodeBlock"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/CodeBlock"
source: /componentes/CodeBlock
---

# CodeBlock

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

CodeBlock renderiza código com realce de sintaxe, números de linha, botão de copiar e seções colapsáveis opcionais. Use CodeBlock para trechos multi-linha como arquivos de código-fonte, comandos de terminal e exemplos de configuração. Use Code para referências inline a nomes de funções, variáveis ou flags de CLI dentro do texto.

## Importação

```tsx
import {CodeBlock} from '@pharos-ds/core/CodeBlock';
```

## Exemplos

### Área interativa

```tsx
import {CodeBlock} from '@pharos-ds/core/CodeBlock';

<CodeBlock
  code="const greeting = 'Olá, Pharos!';
console.log(greeting);"
  language="javascript"
  size="md"
  container="card"
  hasLineNumbers={false}
  hasCopyButton
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` (padrão `md`)
- `container`: `card` · `section` (padrão `card`)
- `hasLineNumbers`: boolean (padrão `false`)
- `hasCopyButton`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Defina a prop language para corresponder ao conteúdo do código para que o realce de sintaxe seja preciso. Use "plaintext" quando o idioma for desconhecido.
- **Faça:** Adicione um title quando o código representar um arquivo. Isso dá contexto aos leitores e aparece na barra de cabeçalho junto ao botão de copiar.
- **Faça:** Use Code para referências inline curtas como nomes de funções ou flags de CLI, e CodeBlock para trechos multi-linha isolados.
- **Evite:** Ative números de linha em trechos curtos (menos de 5 linhas), onde eles poluem sem ajudar na navegação.
- **Evite:** Aninhe um bloco de código dentro de um contêiner rolável. Use a prop maxHeight, que trata overflow nativamente.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `code` | `string` | sim | — | A string de código a exibir. |
| `language` | `string` | não | `'plaintext'` | Idioma para realce de sintaxe. Use "plaintext" para desativar. |
| `title` | `string` | não | — | Nome do arquivo ou rótulo exibido na barra de cabeçalho. |
| `hasLanguageLabel` | `boolean` | não | `true` | Exibe o nome do idioma na barra de cabeçalho. Oculto quando language é "plaintext". |
| `hasLineNumbers` | `boolean` | não | `false` | Exibe uma coluna de números de linha. |
| `highlightLines` | `number[]` | não | — | Números de linha (indexados a partir de 1) a destacar. |
| `hasCopyButton` | `boolean` | não | `true` | Exibe um botão de copiar para a área de transferência. |
| `onCopy` | `() => void` | não | — | Callback após o código ser copiado. |
| `isWrapped` | `boolean` | não | `false` | Quebra linhas longas em vez de habilitar rolagem horizontal. |
| `maxHeight` | `number \| string` | não | — | Altura máxima antes do bloco rolar verticalmente. |
| `size` | `'sm' \| 'md'` | não | `'md'` | Variant de tamanho do texto. |
| `width` | `string` | não | `'fit-content'` | Largura do bloco de código. Qualquer valor CSS de width. 'fit-content' (padrão) encolhe até a linha mais longa. '100%' preenche a largura do pai. |
| `container` | `'card' \| 'section'` | não | `'card'` | Estilo de apresentação do contêiner. 'card' (padrão): borda e radius com fundo de sintaxe muted para aparência de card isolado. 'section': sem borda ou radius e fundo transparente para que o bloco se integre ao card ou painel em que está embutido. |
| `tokenizer` | `(code: string, language: string) => Array<{type: string; start: number; end: number}>` | não | — | Substituição de tokenizer personalizado para idiomas não suportados. |
| `syntaxTheme` | `SyntaxThemeDefinition` | não | — | Substituição de tema de sintaxe por instância. Atalho para envolver o bloco em <SyntaxTheme theme={...}>. Aceita um preset de @pharos-ds/core/theme/syntax ou um tema criado com defineSyntaxTheme(). O padrão é o ancestral SyntaxTheme mais próximo ou as cores de sintaxe em nível de tema. |
| `isCollapsible` | `boolean` | não | `false` | Permite colapsar o corpo do código deixando apenas a barra de cabeçalho. Começa expandido; o cabeçalho fica clicável para alternar. Só exibe o toggle quando o código excede collapsibleThreshold linhas. |
| `collapsibleThreshold` | `number` | não | `10` | Número mínimo de linhas antes de o toggle de colapsar aparecer. Abaixo deste limite, o bloco de código renderiza normalmente mesmo com isCollapsible true. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout. Deve ser um valor stylex.create(). |
| `className` | `string` | não | — | Nome de classe CSS para o elemento raiz. Prefira xstyle para estilização. |
| `style` | `CSSProperties` | não | — | Estilos inline. Prefira xstyle para estilização otimizada com StyleX. |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CodeBlock` · Docs atualizadas: `npx @pharos-ds/cli component CodeBlock`
