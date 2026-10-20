---
title: "Field"
group: "Field"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Field"
source: /componentes/Field
---

# Field

**Grupo:** Field · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Field é um wrapper de baixo nível para controles personalizados, nativos ou de terceiros que ainda não fornecem UI de rótulo, descrição e status de campo. Use quando precisar do shell Field ao redor de um controle que você possui; use inputs Pharos estilizados como TextInput, Typeahead e Select diretamente quando eles já expõem props de label, description e validação.

## Importação

```tsx
import {Field} from '@pharos-ds/core/Field';
```

## Exemplos

### Área interativa

```tsx
import {Field} from '@pharos-ds/core/Field';

<Field
  isRequired={false}
  statusType="none"
  statusVariant="attached"
 />
```

Valores explorados na demo interativa:

- `isRequired`: boolean (padrão `false`)
- `statusType`: `none` · `error` · `warning` · `success` (padrão `none`)
- `statusVariant`: `attached` · `detached` (padrão `attached`)

## Boas práticas

- **Faça:** Envolva controles personalizados, inputs nativos ou widgets de terceiros que precisem de rotulação, texto de ajuda, indicadores optional/required ou status de validação.
- **Faça:** Sempre forneça um rótulo para acessibilidade, mesmo que oculto visualmente com isLabelHidden.
- **Faça:** Use inputID e descriptionID para conectar o rótulo e a descrição ao controle interno com htmlFor e aria-describedby.
- **Evite:** Aninhe Field ao redor de inputs estilizados como TextInput, Typeahead, Select, DateInput ou TextArea; esses componentes já renderizam seu próprio shell Field.
- **Evite:** Use o status variant attached em controles sem borda como sliders, switches ou checkboxes; use detached para que a mensagem não sobreponha o controle.
- **Evite:** Defina isOptional e isRequired no mesmo campo.
- **Evite:** Oculte o rótulo sem fornecer uma forma alternativa para o usuário entender o propósito do campo.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo do campo (sempre renderizado para acessibilidade). |
| `inputID` | `string` | sim | — | ID do elemento input (usado para o atributo htmlFor do rótulo). |
| `children` | `ReactNode` | sim | — | O input ou controle a renderizar. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo (permanece acessível a leitores de tela). |
| `isDisabled` | `boolean` | não | `false` | Se o input associado está desabilitado. Propaga estilos desabilitados ao rótulo. |
| `description` | `string` | não | — | Texto de descrição exibido entre o rótulo e o input. |
| `descriptionID` | `string` | não | — | ID do elemento de descrição (use para aria-describedby no input). |
| `isOptional` | `boolean` | não | `false` | Se o campo é opcional (mutuamente exclusivo com isRequired). |
| `isRequired` | `boolean` | não | `false` | Se o campo é obrigatório (mutuamente exclusivo com isOptional). |
| `labelIcon` | `IconType` | não | — | Ícone a exibir antes do texto do rótulo. Veja `pharos docs icons` para nomes semânticos válidos. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido em um ícone de info no final do rótulo. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string, messageID?: string}` | não | — | Indicador de status com type e message opcional. Quando message está definido, exibe uma caixa de status colorida. messageID serve para conectar aria-describedby no input. |
| `statusVariant` | `'attached' \| 'detached'` | não | `'attached'` | Como a mensagem de status é renderizada em relação ao input. Attached sobrepõe a borda do input; detached flutua abaixo. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para que permaneçam alinhados. Prefira isto em vez de definir width via xstyle/className/style, que só dimensionam a caixa interna do controle. |
| `ref` | `React.Ref<HTMLDivElement>` | não | — | Ref encaminhada ao elemento raiz. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |
| `className` | `string` | não | — | Nome(s) de classe CSS anexados ao elemento raiz. Prefira xstyle para deduplicação StyleX. |
| `style` | `React.CSSProperties` | não | — | Estilos inline aplicados ao elemento raiz. Têm prioridade sobre estilos inline StyleX. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Field` · Docs atualizadas: `npx @pharos-ds/cli component Field`
