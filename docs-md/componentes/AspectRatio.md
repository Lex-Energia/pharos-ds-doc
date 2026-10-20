---
title: "AspectRatio"
group: "Misc"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/AspectRatio"
source: /componentes/AspectRatio
---

# AspectRatio

**Grupo:** Misc · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Mantém uma proporção fixa entre largura e altura para seus filhos, independentemente do tamanho da tela. Use em contêineres de mídia como vídeos, imagens, miniaturas ou qualquer conteúdo que precise de proporções consistentes.

## Importação

```tsx
import {AspectRatio} from '@pharos-ds/core/AspectRatio';
```

## Exemplos

### Área interativa

```tsx
import {AspectRatio} from '@pharos-ds/core/AspectRatio';

<AspectRatio
  ratioPreset="16:9"
  shape="rectangle"
  fit="cover"
 />
```

Valores explorados na demo interativa:

- `ratioPreset`: `16:9` · `4:3` · `square` (padrão `16:9`)
- `shape`: `rectangle` · `ellipse` (padrão `rectangle`)
- `fit`: `cover` · `contain` · `center` (padrão `cover`)

## Boas práticas

- **Faça:** Expresse a proporção como uma fração como `16/9` ou `4/3` para melhor legibilidade.
- **Faça:** Use para mídia que precisa de proporções consistentes em diferentes tamanhos de tela.
- **Faça:** Use `fit="cover"` para imagens e vídeo para que o componente dimensione o filho; o filho não deve repetir estilos de `width`/`height`/`objectFit`.
- **Evite:** Use para contêineres de layout gerais; use componentes de layout padrão em vez disso.
- **Evite:** Aninhe contêineres AspectRatio; um nível é suficiente.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `ratio` | `number` | sim | — | Proporção de aspecto como largura/altura (ex.: 16/9, 1). |
| `shape` | `'rectangle' \| 'ellipse'` | não | `'rectangle'` | Formato do contêiner. Ambos respeitam o `ratio`. `ellipse` recorta em formato oval (um círculo quando `ratio={1}`). |
| `fit` | `'cover' \| 'contain' \| 'center'` | não | — | Como o filho é dimensionado dentro da caixa de proporção. `cover` preenche e recorta a mídia, `contain` preenche com letterboxing, `center` mantém o tamanho natural centralizado. Quando omitido, o filho se estiliza sozinho. |
| `children` | `ReactNode` | sim | — | Conteúdo posicionado absolutamente para preencher o contêiner. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/AspectRatio` · Docs atualizadas: `npx @pharos-ds/cli component AspectRatio`
