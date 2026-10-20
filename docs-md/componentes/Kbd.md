---
title: "Kbd"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Kbd"
source: /componentes/Kbd
---

# Kbd

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Renderiza um atalho de teclado como badges de tecla estilizados. Use Kbd em tooltips, menus e textos de ajuda para mostrar combinações de teclas.

## Importação

```tsx
import {Kbd} from '@pharos-ds/core/Kbd';
```

## Exemplos

### Área interativa

```tsx
import {Kbd} from '@pharos-ds/core/Kbd';

<Kbd
  keys="mod+k"
 />
```

Valores explorados na demo interativa:

- `keys`: `mod+k` · `mod+shift+p` · `escape` · `mod+enter` (padrão `mod+k`)

## Boas práticas

- **Faça:** Posicione atalhos perto da ação que disparam: em um tooltip, item de menu ou instrução inline.
- **Faça:** Use mod em vez de ctrl ou cmd; ele se adapta automaticamente à plataforma do usuário.
- **Evite:** Use Kbd como única forma de descobrir uma ação; atalhos devem complementar controles visíveis, não substituí-los.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `keys` | `string` | sim | — | String de atalho de teclado. Use "+" para separar teclas. Teclas especiais: mod (Cmd no Mac), ctrl, alt, shift, enter, backspace, escape, tab, up, down, left, right. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |
| `className` | `string` | não | — | Nome de classe CSS para o elemento raiz. Prefira xstyle para estilização; className é fornecido para integração com sistemas não-StyleX. |
| `style` | `CSSProperties` | não | — | Estilos inline para o elemento raiz. Prefira xstyle para estilização; estilos inline ignoram a otimização StyleX. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Kbd` · Docs atualizadas: `npx @pharos-ds/cli component Kbd`
