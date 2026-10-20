---
title: "Tab"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/Tab"
source: /componentes/Tab
---

# Tab

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de aba individual que renderiza como botão ou link âncora, com estilização de estado selecionado e ícones opcionais.

## Importação

```tsx
import {Tab} from '@pharos-ds/core/Tab';
```

## Exemplos

### Área interativa

```tsx
import {Tab} from '@pharos-ds/core/Tab';

<Tab
  isLabelHidden={false}
 />
```

Valores explorados na demo interativa:

- `isLabelHidden`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string` | sim | — | Valor único desta aba, correspondido a TabListContext.value. |
| `label` | `string` | sim | — | Rótulo acessível desta aba. Usado como texto visível por padrão ou como aria-label quando isLabelHidden é true. |
| `isLabelHidden` | `boolean` | não | `false` | Se o rótulo está oculto visualmente. Quando true, apenas o ícone e endContent são exibidos, e label é usado como aria-label para acessibilidade. |
| `href` | `string` | não | — | URL para navegar; quando fornecido, a aba renderiza como elemento anchor. |
| `as` | `LinkComponentType` | não | — | Componente personalizado a renderizar em vez de <a> para abas com link. Substitui o padrão do LinkProvider. Aplica-se apenas quando href é fornecido. |
| `icon` | `ReactNode` | não | — | Elemento de ícone exibido quando a aba não está selecionada. |
| `selectedIcon` | `ReactNode` | não | — | Elemento de ícone exibido quando a aba está selecionada; usa icon como fallback se não fornecido. |
| `endContent` | `ReactNode` | não | — | Conteúdo renderizado após o rótulo, como contagem em badge ou ponto de status. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Tab` · Docs atualizadas: `npx @pharos-ds/cli component Tab`
