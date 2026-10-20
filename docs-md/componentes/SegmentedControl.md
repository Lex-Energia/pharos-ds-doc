---
title: "SegmentedControl"
group: "SegmentedControl"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/SegmentedControl"
source: /componentes/SegmentedControl
---

# SegmentedControl

**Grupo:** SegmentedControl · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Grupo de botões segmentados que permite ao usuário fazer uma seleção única entre um pequeno conjunto de opções mutuamente exclusivas. Use SegmentedControl quando todas as opções devem estar visíveis de uma vez e a seleção controla um valor ou modo, não navegação de página.

## Importação

```tsx
import {SegmentedControl} from '@pharos-ds/core/SegmentedControl';
```

## Exemplos

### Área interativa

```tsx
import {SegmentedControl, SegmentedControlItem} from '@pharos-ds/core/SegmentedControl';

<SegmentedControl
  size="md"
  layout="hug"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` (padrão `md`)
- `layout`: `hug` · `fill` (padrão `hug`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use para alternar entre 2–5 visualizações ou modos mutuamente exclusivos em que todas as opções devem estar visíveis.
- **Faça:** Forneça um rótulo descritivo para o controle para garantir que o grupo seja acessível a leitores de tela.
- **Evite:** Use para navegação em nível de página; use TabList em vez disso. TabList é um componente de navegação, enquanto SegmentedControl é um input que sempre tem exatamente uma opção selecionada.
- **Evite:** Use para estados simples ligado/desligado; use ToggleButton em vez disso. ToggleButton pode ser alternado independentemente, enquanto SegmentedControl impõe seleção única em um grupo.
- **Evite:** Envolva um SegmentedControl desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string` | sim | — | O valor atualmente selecionado (controlled). |
| `onChange` | `(value: string) => void` | sim | — | Callback disparado quando um segmento é selecionado. |
| `label` | `string` | sim | — | Rótulo acessível do grupo radio (usado como aria-label, nunca renderizado visualmente). |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variant de tamanho do controle. |
| `layout` | `'hug' \| 'fill'` | não | `'hug'` | Modo de layout. hug (padrão) dimensiona segmentos ao conteúdo; fill estica-os igualmente para preencher o contêiner. |
| `isDisabled` | `boolean` | não | `false` | Se o controle inteiro está desabilitado. |
| `disabledMessage` | `string` | não | — | Explica por que o controle está desabilitado. Aplica-se ao estado desabilitado do grupo inteiro (isDisabled), não por segmento. Com isDisabled, exibe um tooltip no hover/foco por teclado e mantém o controle focável via aria-disabled (a seleção permanece bloqueada). Use isto em vez de envolver um SegmentedControl desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `children` | `ReactNode` | sim | — | Filhos SegmentedControlItem. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SegmentedControl` · Docs atualizadas: `npx @pharos-ds/cli component SegmentedControl`
