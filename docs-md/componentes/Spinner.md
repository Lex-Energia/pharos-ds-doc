---
title: "Spinner"
group: "Misc"
category: "Feedback & Status"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Spinner"
source: /componentes/Spinner
---

# Spinner

**Grupo:** Misc · **Categoria:** Feedback & Status · **Pacote:** `@pharos-ds/core`

Indicador de carregamento animado para processos com duração desconhecida, como busca de dados ou envio de formulário. Suporta rótulos visíveis, vários tamanhos e um variant de fundo escuro. Para conteúdo com dimensões conhecidas, use Skeleton em vez disso.

## Importação

```tsx
import {Spinner} from '@pharos-ds/core/Spinner';
```

## Exemplos

### Área interativa

```tsx
import {Spinner} from '@pharos-ds/core/Spinner';

<Spinner
  size="md"
  shade="default"
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` · `xl` (padrão `md`)
- `shade`: `default` · `onMedia` · `subtle` · `inherit` (padrão `default`)

## Boas práticas

- **Faça:** Forneça um rótulo significativo para descrever o que está carregando para usuários de leitores de tela.
- **Faça:** Use o shade "onMedia" quando posicionado sobre fundos escuros ou em cores de destaque.
- **Evite:** Use para áreas de conteúdo com dimensões conhecidas; use Skeleton para preservar o layout.
- **Evite:** Empilhe vários spinners na mesma visualização; use um para representar o estado de carregamento geral.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do Spinner (10px, 14px, 18px). |
| `shade` | `'default' \| 'onMedia' \| 'subtle' \| 'inherit'` | não | `'default'` | Shade de cor para fundos claros ou escuros. |
| `label` | `ReactNode` | não | — | Conteúdo visível abaixo do spinner. Rótulos string definem aria-label automaticamente. |
| `aria-label` | `string` | não | `'Loading'` | Nome acessível para leitores de tela. Padrão é label (se string) ou "Loading". |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Spinner` · Docs atualizadas: `npx @pharos-ds/cli component Spinner`
