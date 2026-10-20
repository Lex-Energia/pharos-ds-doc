---
title: "FormLayout"
group: "Layout"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/FormLayout"
source: /componentes/FormLayout
---

# FormLayout

**Grupo:** Layout · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Contêiner de layout que organiza campos de formulário com espaçamento e direção consistentes. FormLayout cuida de onde os campos ficam, não de estado ou envio. Envolva-o em um <form> para isso. Suporta direções vertical (padrão), horizontal e horizontal-labels, e pode ser aninhado para misturá-las.

## Importação

```tsx
import {FormLayout} from '@pharos-ds/core/FormLayout';
```

## Exemplos

### Área interativa

```tsx
import {FormLayout} from '@pharos-ds/core/FormLayout';

<FormLayout
  direction="vertical"
 />
```

Valores explorados na demo interativa:

- `direction`: `vertical` · `horizontal` · `horizontal-labels` (padrão `vertical`)

## Boas práticas

- **Faça:** Empilhe campos verticalmente na maioria dos formulários. É o mais fácil de escanear de cima para baixo.
- **Faça:** Aninhe um FormLayout horizontal dentro de um vertical quando campos se combinam naturalmente, como Nome + Sobrenome ou Cidade + Estado + CEP.
- **Faça:** Use horizontal-labels em páginas de configurações onde os rótulos ficam ao lado dos inputs.
- **Evite:** Use FormLayout para estado ou envio de formulário. É apenas layout. Envolva-o em um <form> para isso.
- **Evite:** Coloque campos não relacionados lado a lado em um layout horizontal. Reserve isso para campos que pertencem juntos.
- **Evite:** Aninhe horizontal-labels dentro de outro FormLayout. Ele usa CSS Grid e precisa ser o contêiner mais externo.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `direction` | `'vertical' \| 'horizontal' \| 'horizontal-labels'` | não | `'vertical'` | Controla a disposição dos campos. Vertical empilha de cima para baixo, horizontal organiza da esquerda para a direita com flex-grow igual, e horizontal-labels usa CSS Grid com rótulos à esquerda dos inputs (colapsa para vertical em viewports estreitas <=480px). |
| `children` | `ReactNode` | não | — | Campos de formulário a organizar. Aceita inputs Pharos (TextInput, Selector etc.) e controles personalizados envolvidos em Field. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/FormLayout` · Docs atualizadas: `npx @pharos-ds/cli component FormLayout`
