---
title: "Center"
group: "Layout"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Center"
source: /componentes/Center
---

# Center

**Grupo:** Layout · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Center alinha o conteúdo ao centro de seu contêiner. Use para estados vazios, telas de carregamento, formulários de login ou qualquer conteúdo que deva ficar no centro do espaço disponível.

## Importação

```tsx
import {Center} from '@pharos-ds/core/Center';
```

## Exemplos

### Área interativa

```tsx
import {Center} from '@pharos-ds/core/Center';

<Center
  axis="both"
  isInline={false}
 />
```

Valores explorados na demo interativa:

- `axis`: `both` · `horizontal` · `vertical` (padrão `both`)
- `isInline`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use axis="horizontal" ou axis="vertical" quando precisar centralizar em apenas uma direção. Ambos os eixos é o padrão, mas nem sempre é necessário.
- **Faça:** Defina uma height ao centralizar verticalmente. Center precisa de uma altura definida para saber em qual espaço centralizar.
- **Faça:** Use isInline para centralizar elementos pequenos como ícones ou badges dentro de uma linha de texto sem quebrar o fluxo do texto.
- **Evite:** Envolva grandes seções de página em Center. Use Layout ou AppShell para estrutura em nível de página.
- **Evite:** Use Center para listas horizontais de itens. Use Stack com hAlign="center" em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `axis` | `'both' \| 'horizontal' \| 'vertical'` | não | `'both'` | Qual(is) direção(ões) centralizar. |
| `width` | `SizeValue` | não | — | Largura do contêiner (px ou valor CSS). |
| `height` | `SizeValue` | não | — | Altura do contêiner (px ou valor CSS). |
| `maxWidth` | `SizeValue` | não | — | Largura máxima do contêiner (px ou valor CSS). |
| `minHeight` | `SizeValue` | não | — | Altura mínima do contêiner (px ou valor CSS). |
| `isInline` | `boolean` | não | `false` | Usa inline-flex (útil para texto/ícones). |
| `children` | `ReactNode` | não | — | Conteúdo a centralizar. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Center` · Docs atualizadas: `npx @pharos-ds/cli component Center`
