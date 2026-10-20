---
title: "Text"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Text"
source: /componentes/Text
---

# Text

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Text renderiza texto de corpo e headings estilizados do tema. Use Text com um type semântico para corpo, rótulos e captions, e Heading para títulos de seção que produzem o elemento h1–h6 correto.

## Importação

```tsx
import {Text} from '@pharos-ds/core/Text';
```

## Exemplos

### Área interativa

```tsx
import {Text} from '@pharos-ds/core/Text';

<Text
  type="body"
  color="primary"
  weight="normal"
 />
```

Valores explorados na demo interativa:

- `type`: `body` · `large` · `label` · `supporting` · `code` · `display-1` · `display-2` · `display-3` · `inherit` (padrão `body`)
- `color`: `primary` · `secondary` · `disabled` · `placeholder` · `accent` · `inherit` (padrão `primary`)
- `weight`: `normal` · `medium` · `semibold` · `bold` (padrão `normal`)

## Boas práticas

- **Faça:** Escolha um type semântico (body, label, supporting, large, code) em vez de definir size e weight manualmente; o tema cuida dos detalhes.
- **Faça:** Defina accessibilityLevel em Heading quando o level visual difere do outline do documento, para que leitores de tela anunciem a hierarquia correta.
- **Faça:** Use maxLines com um número para truncar conteúdo longo; um tooltip aparece automaticamente no hover para que nenhum texto seja perdido.
- **Faça:** Ative hasTabularNumbers para colunas de dados numéricos, para que dígitos alinhem verticalmente entre linhas.
- **Evite:** Sobrescreva size e weight quando um type semântico já corresponde; overrides extras lutam contra o tema e quebram quando temas mudam.
- **Evite:** Pule levels de heading no outline do documento; vá h1 depois h2 depois h3, nunca h1 depois h3.
- **Evite:** Use tags HTML brutas como <p>, <h1>–<h6> ou <span> para texto; Text e Heading aplicam os tokens de tema corretos automaticamente.
- **Evite:** Passe uma prop `variant`; Text não tem prop `variant`. Use `type` para estilo semântico (body, label, large, supporting, code) ou use Heading para headings.
- **Evite:** Use Text para headings; use Heading com prop `level` (1–6) para títulos de seção e headings.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `type` | `'body' \| 'large' \| 'label' \| 'supporting' \| 'code' \| 'display-1' \| 'display-2' \| 'display-3' \| 'inherit'` | não | `'body'` | Type semântico de texto. Determina size, weight e line-height do tema. 'inherit' toma os três do texto ao redor. Temas podem adicionar types customizados. Nota: esta prop se chama `type`, não `variant`. |
| `children` | `ReactNode` | sim | — | Conteúdo de texto. |
| `size` | `'4xs' \| '3xs' \| '2xs' \| 'xsm' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | não | — | Sobrescrita explícita de font size. Sobrescreve o size de `type`, mas preserva outras propriedades do type. Prefira usar apenas `type`. |
| `color` | `'primary' \| 'secondary' \| 'disabled' \| 'placeholder' \| 'accent' \| 'inherit'` | não | — | Cor do texto. Padrão 'secondary' para o type 'supporting', 'primary' para todos os outros. |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | não | — | Sobrescrita de font weight. |
| `display` | `'inline' \| 'block'` | não | `'inline'` | Display type. Silenciosamente sobrescrito para 'block' quando maxLines > 0 ou hasCapsize é true. |
| `as` | `'span' \| 'p' \| 'div' \| 'label'` | não | `'span'` | Elemento HTML a renderizar. |
| `maxLines` | `number` | não | `0` | Número máximo de linhas antes da truncagem. 0 significa sem truncagem. Quando definido, mostra tooltip no hover se o conteúdo estiver truncado. |
| `hasTruncateTooltip` | `boolean \| 'above' \| 'below' \| 'start' \| 'end'` | não | `true` | Controla comportamento de tooltip para texto truncado. true mostra o tooltip na posição padrão, false desabilita, ou uma string de placement ('above' \| 'below' \| 'start' \| 'end') define posição específica. |
| `wordBreak` | `'break-word' \| 'break-all'` | não | — | Comportamento de word break ao truncar. Padrão 'break-all' para truncagem de linha única, 'break-word' caso contrário. |
| `textWrap` | `'wrap' \| 'nowrap' \| 'balance' \| 'pretty'` | não | — | Comportamento de quebra de texto. |
| `justify` | `'start' \| 'center' \| 'end'` | não | `'start'` | Alinhamento de texto (justificação). Usa valores lógicos (start/end) para compatibilidade i18n/RTL. |
| `hasCapsize` | `boolean` | não | `false` | Ativa alinhamento óptico usando text-box-trim. Força display block. |
| `hasStrikethrough` | `boolean` | não | `false` | Aplica decoração de texto strikethrough. |
| `hasTabularNumbers` | `boolean` | não | `false` | Usa números tabulares (monospace) para dados numéricos alinhados. |
| `id` | `string` | não | — | Atributo HTML id. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Text` · Docs atualizadas: `npx @pharos-ds/cli component Text`
