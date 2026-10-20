---
title: "Section"
group: "Layout"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Section"
source: /componentes/Section
---

# Section

**Grupo:** Layout · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Section é a forma correta de criar regiões de página e agrupar conteúdo relacionado. Use para grupos de configurações, seções de formulário, áreas de sidebar ou sempre que precisar de separação visual entre partes de uma página. Se você está tentado a usar um Card para uma seção de página, use Section.

## Importação

```tsx
import {Section} from '@pharos-ds/core/Section';
```

## Exemplos

### Área interativa

```tsx
import {Section} from '@pharos-ds/core/Section';

<Section
  variant="section"
  padding="4"
  hasDividers={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `section` · `transparent` · `muted` (padrão `section`)
- `padding`: `2` · `4` · `6` (padrão `4`)
- `hasDividers`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use Section para agrupamento em nível de página: painéis de configurações, grupos de formulário, regiões de sidebar. São seções de uma página, não itens discretos.
- **Faça:** Comece com a variant padrão. Use muted apenas para chamar atenção a uma região específica.
- **Faça:** Adicione divisores entre seções com o mesmo fundo que precisam de separação.
- **Faça:** Combine com heading + Stack para um padrão típico de seção de página.
- **Evite:** Use Card quando você quer dizer Section. Cards são para itens discretos (uma notificação, um perfil). Sections são para regiões de página.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `variant` | `'section' \| 'transparent' \| 'muted'` | não | `'section'` | Variant de fundo aplicada ao container da section. |
| `width` | `SizeValue` | não | — | Largura da section; um número é interpretado como pixels, uma string é usada como está. |
| `height` | `SizeValue` | não | — | Altura da section; um número é interpretado como pixels, uma string é usada como está. |
| `maxWidth` | `SizeValue` | não | — | Largura máxima da section. |
| `minHeight` | `SizeValue` | não | — | Altura mínima da section. |
| `children` | `ReactNode` | não | — | Conteúdo renderizado dentro da section. |
| `dividers` | `Array<'top' \| 'bottom' \| 'start' \| 'end'>` | não | — | Quais lados da section têm bordas divisoras. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | `4` | Padding interno usando a escala de spacing (0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10). Use padding={0} para conteúdo edge-to-edge. |
| `paddingBlock` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Sobrescrita de padding block (vertical). Sobrescreve apenas o padding do eixo block, preservando padding inline de `padding` ou o padrão do tema do container. Aceita a escala de spacing (0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10). |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Section` · Docs atualizadas: `npx @pharos-ds/cli component Section`
