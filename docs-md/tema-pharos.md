---
title: "Tema Pharos (marca Alexandria)"
description: "Referência completa do tema oficial: paleta da marca, tokens claro/escuro, tipografia, motion, overrides de componentes e ícones."
package: "@pharos-ds/theme-pharos@1.0.4"
---

# Tema Pharos (marca Alexandria)

Tema oficial do design system, pacote `@pharos-ds/theme-pharos` v1.0.4. Este arquivo é gerado a partir do `theme.css` compilado do pacote e lista todos os valores que o tema aplica sobre o `@pharos-ds/core`. Para instalação e uso, veja [Temas](./temas.md) e [Guias → Temas](./guias/temas.md).

> **Tema padrão.** Todo projeto Pharos usa este tema por padrão. Não use `@pharos-ds/theme-neutral` nem outro `@pharos-ds/theme-*` (são temas de exemplo da CLI), mesmo que uma CLI anterior à 1.0.3 os sugira em `pharos init`.

## Identidade da marca

Fonte de verdade da paleta: brandbook Alexandria (março/2026).

| Papel | Cor | Uso no tema |
| --- | --- | --- |
| Laranja primário | `#F26641` (Pantone 7579 C) | accent da UI, Button primary, StatusDot accent, ProgressBar accent |
| Azul | `#034694` (Pantone 286 C) | categórico blue, Badge info |
| Roxo destaque | `#7C51A1` (Pantone 7441 C) | categórico purple, keywords/types no syntax |
| Amarelo 1 / 2 | `#FAA61A` / `#FFF200` | categórico yellow |
| Chumbo (texto) | `#383838` | texto e ícones primários no modo claro |

Princípios: superfícies quase brancas ou cinza suave (evitar preto absoluto); tipografia Figtree; ícones Lucide; os tons categóricos mantêm a estrutura OKLCH do core, trocando os âncoras de laranja, azul, roxo e amarelo pelos da marca onde o contraste permite.

Regras rápidas para gerar UI com o tema:

- Use tokens (`var(--color-...)`, `var(--spacing-...)`) em vez de hex soltos; os valores abaixo são o que os tokens resolvem.
- Um único Button `primary` (laranja) por view; `secondary`/`ghost` para o resto.
- Todo token de cor tem par claro/escuro resolvido via `light-dark()`; não force cores por modo manualmente.
- Status: `success`/`warning`/`error` para feedback; cores categóricas (blue, purple, teal...) para categorias, não para estado.

## Tipografia

Família **Figtree** para corpo e títulos (fallback para a pilha do sistema); código usa a monoespaçada da plataforma. Escala modular com base 14px e razão 1.2. Títulos h3/h4 em bold para hierarquia de subseção.

| Token | Valor |
| --- | --- |
| `--font-family-body` | `Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| `--font-family-heading` | `Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| `--font-family-code` | `ui-monospace, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |

### Escala de tamanhos

| Token | rem | px (base 16) |
| --- | --- | --- |
| `--font-size-4xs` | `0.375rem` | 6 |
| `--font-size-3xs` | `0.4375rem` | 7 |
| `--font-size-2xs` | `0.5rem` | 8 |
| `--font-size-xs` | `0.625rem` | 10 |
| `--font-size-sm` | `0.75rem` | 12 |
| `--font-size-base` | `0.875rem` | 14 |
| `--font-size-lg` | `1.0625rem` | 17 |
| `--font-size-xl` | `1.25rem` | 20 |
| `--font-size-2xl` | `1.5rem` | 24 |
| `--font-size-3xl` | `1.8125rem` | 29 |
| `--font-size-4xl` | `2.1875rem` | 35 |
| `--font-size-5xl` | `2.625rem` | 42 |

### Pesos (do core, não sobrescritos pelo tema)

| Token | Valor |
| --- | --- |
| `--font-weight-normal` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

### Estilos de texto

Mapeiam para os componentes `Heading` (level 1–6) e `Text` (type body, large, label, code, supporting, display-1..3).

| Estilo | Tamanho | Peso | Line-height |
| --- | --- | --- | --- |
| `heading-1` | `2xl (1.5rem)` | `semibold (600)` | `1.3333` |
| `heading-2` | `xl (1.25rem)` | `semibold (600)` | `1.4` |
| `heading-3` | `lg (1.0625rem)` | `bold (700)` | `1.4118` |
| `heading-4` | `base (0.875rem)` | `bold (700)` | `1.4286` |
| `heading-5` | `sm (0.75rem)` | `semibold (600)` | `1.6667` |
| `heading-6` | `xs (0.625rem)` | `semibold (600)` | `1.6` |
| `body` | `base (0.875rem)` | `normal (400)` | `1.4286` |
| `large` | `lg (1.0625rem)` | `semibold (600)` | `1.4118` |
| `label` | `base (0.875rem)` | `medium (500)` | `1.4286` |
| `code` | `base (0.875rem)` | `normal (400)` | `1.4286` |
| `supporting` | `sm (0.75rem)` | `normal (400)` | `1.6667` |
| `display-1` | `5xl (2.625rem)` | `normal (400)` | `1.2381` |
| `display-2` | `4xl (2.1875rem)` | `normal (400)` | `1.2571` |
| `display-3` | `3xl (1.8125rem)` | `normal (400)` | `1.3793` |

## Cores

Cada token resolve para o par claro/escuro abaixo (o CSS usa `light-dark()`; o modo vem do prop `mode` de `<Theme>` ou de `data-theme` no `<html>`).

### Superfícies (backgrounds)

Modo claro: superfícies brancas flutuando sobre um body levemente cinza; sombras fazem a elevação. Modo escuro: card, popover e muted colapsam no tom do body e se elevam só por sombra; `surface` é mais clara que o body para componentes interativos (switch, radio, checkbox, dialog, app shell).

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-surface` | `#ffffff` | `#262626` |
| `--color-background-body` | `#f1f1f1` | `#1b1b1b` |
| `--color-background-card` | `#ffffff` | `#1b1b1b` |
| `--color-background-popover` | `#ffffff` | `#1b1b1b` |
| `--color-background-muted` | `#f1f1f1` | `#1b1b1b` |

### Accent, neutro e overlays

O accent é o laranja Alexandria (`#F26641`), usado em Button primary, links e foco. No escuro ele clareia para manter contraste.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-accent` | `#F26641` | `#FF8A5C` |
| `--color-accent-muted` | `#FDE0D6` | `#F266414D` |
| `--color-neutral` | `#0000000F` | `#FFFFFF1A` |
| `--color-overlay` | `#00000080` | `#000000CC` |
| `--color-overlay-hover` | `#0000000D` | `#FFFFFF0D` |
| `--color-overlay-pressed` | `#0000001A` | `#FFFFFF1A` |

### Texto

Texto primário usa o chumbo do brandbook (`#383838`); o tema evita preto absoluto.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-text-primary` | `#383838` | `#fafafa` |
| `--color-text-secondary` | `#737373` | `#a3a3a3` |
| `--color-text-disabled` | `#a3a3a3` | `#525252` |
| `--color-text-accent` | `#B84626` | `#FF8A5C` |

### Cor "on" (texto sobre superfícies coloridas)

Use sobre accent, success, error e warning para garantir contraste.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-on-dark` | `#ffffff` | *(igual)* |
| `--color-on-light` | `#383838` | *(igual)* |
| `--color-on-accent` | `#171717` | *(igual)* |
| `--color-on-success` | `#ffffff` | `#171717` |
| `--color-on-error` | `#ffffff` | `#171717` |
| `--color-on-warning` | `#383838` | *(igual)* |

### Ícones

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-icon-accent` | `#B84626` | `#FF8A5C` |
| `--color-icon-primary` | `#383838` | `#fafafa` |
| `--color-icon-secondary` | `#737373` | `#a3a3a3` |
| `--color-icon-disabled` | `#a3a3a3` | `#525252` |

### Status (success, error, warning)

Modo claro: fundo pastel (`-muted`) + texto/ícone escuro saturado. Modo escuro: inverte para overlay translúcido do matiz + texto pastel claro. Usados por Banner, inputs com status e Button destructive.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-success` | `#007004` | `#9fe59b` |
| `--color-error` | `#a50c25` | `#ffc6c1` |
| `--color-warning` | `#745b00` | `#fdcf4f` |
| `--color-success-muted` | `#c5e5c0` | `#84c9803D` |
| `--color-error-muted` | `#facecb` | `#ff9e973D` |
| `--color-warning-muted` | `#f8da9d` | `#deb4333D` |

### Bordas e efeitos

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-border` | `#00000014` | `#FFFFFF1A` |
| `--color-border-emphasized` | `#d4d4d4` | `#525252` |
| `--color-skeleton` | `#ebebeb` | `#525252` |
| `--color-shadow` | `#0000001A` | `#0000004D` |
| `--color-tint-hover` | `black` | `white` |

### Radius

Ligeiramente maior que o padrão do core. Use `--radius-element` em botões/inputs, `--radius-container` em cards e `--radius-page` em superfícies grandes.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--radius-none` | `0.25rem` | *(igual)* |
| `--radius-inner` | `0.375rem` | *(igual)* |
| `--radius-element` | `0.625rem` | *(igual)* |
| `--radius-container` | `0.75rem` | *(igual)* |
| `--radius-page` | `1.75rem` | *(igual)* |
| `--radius-full` | `9999px` | *(igual)* |

### Sombras

No escuro, as sombras ganham um inset branco de 1px em todas as bordas ("bezel"), simulando luz na borda da superfície. Os `--shadow-inset-*` são anéis de 2px para hover, seleção e status.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--shadow-low` | `0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 25%)), 0 4px 8px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 40%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 8%))` | *(igual)* |
| `--shadow-med` | `0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 35%)), 0 4px 12px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 12%))` | *(igual)* |
| `--shadow-high` | `0 4px 6px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), 0 12px 24px light-dark(oklch(0 0 0 / 15%), oklch(0 0 0 / 70%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 15%))` | *(igual)* |
| `--shadow-inset-hover` | `inset 0px 0px 0px 2px #F266414D` | *(igual)* |
| `--shadow-inset-selected` | `inset 0px 0px 0px 2px #F2664180` | *(igual)* |
| `--shadow-inset-success` | `inset 0px 0px 0px 2px #1981004D` | *(igual)* |
| `--shadow-inset-warning` | `inset 0px 0px 0px 2px #ffce2f4D` | *(igual)* |
| `--shadow-inset-error` | `inset 0px 0px 0px 2px #e33f4a4D` | *(igual)* |

### Syntax highlight (CodeBlock)

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-syntax-keyword` | `#7C51A1` | `#C4A3E0` |
| `--color-syntax-string` | `#005600` | `#a6d2a2` |
| `--color-syntax-comment` | `#737373` | `#a3a3a3` |
| `--color-syntax-number` | `#C44A28` | `#FFA07A` |
| `--color-syntax-function` | `#034694` | `#8BB8F8` |
| `--color-syntax-type` | `#7C51A1` | `#C4A3E0` |
| `--color-syntax-variable` | `#383838` | `#e5e5e5` |
| `--color-syntax-operator` | `#737373` | `#a3a3a3` |
| `--color-syntax-constant` | `#C44A28` | `#FFA07A` |
| `--color-syntax-tag` | `#89001a` | `#ffaeaa` |
| `--color-syntax-attribute` | `#B87400` | `#FFD066` |
| `--color-syntax-property` | `#005348` | `#83dac9` |
| `--color-syntax-punctuation` | `#a3a3a3` | `#525252` |
| `--color-syntax-background` | `#fafafa` | `#0a0a0a` |

### Paleta categórica

Dez matizes, cada um com fundo, borda, ícone e texto. Claro: fundo pastel + texto escuro saturado. Escuro: inverte para overlay translúcido do matiz (24% alpha) + texto pastel claro. São a base das variantes categóricas de `Badge`, `Token`, `Banner` e similares.

#### red

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-red` | `#facecb` | `#ff9e973D` |
| `--color-border-red` | `#e6bab8` | `#ff6f6c` |
| `--color-icon-red` | `#89001a` | `#ff9e97` |
| `--color-text-red` | `#89001a` | `#ffc6c1` |

#### orange — laranja da marca `#F26641` (Pantone 7579 C)

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-orange` | `#FDE0D6` | `#F266413D` |
| `--color-border-orange` | `#F5C4B3` | `#F26641` |
| `--color-icon-orange` | `#B04324` | `#FFA07A` |
| `--color-text-orange` | `#B04324` | `#FFC4A8` |

#### yellow — amarelos da marca `#FAA61A` / `#FFF200`

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-yellow` | `#FFF0CC` | `#FAA61A3D` |
| `--color-border-yellow` | `#F5D78A` | `#FAA61A` |
| `--color-icon-yellow` | `#B87400` | `#FFD066` |
| `--color-text-yellow` | `#B87400` | `#FFE08A` |

#### green

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-green` | `#c5e5c0` | `#84c9803D` |
| `--color-border-green` | `#b2d1ac` | `#69ad67` |
| `--color-icon-green` | `#0c5700` | `#84c980` |
| `--color-text-green` | `#0c5700` | `#9fe59b` |

#### teal

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-teal` | `#a5e3d6` | `#7ec6b83D` |
| `--color-border-teal` | `#94d6c8` | `#63ab9d` |
| `--color-icon-teal` | `#005348` | `#7ec6b8` |
| `--color-text-teal` | `#005348` | `#99e2d3` |

#### cyan

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-cyan` | `#a3e0ef` | `#83c2d43D` |
| `--color-border-cyan` | `#91d3e3` | `#67a7b8` |
| `--color-icon-cyan` | `#00505f` | `#83c2d4` |
| `--color-text-cyan` | `#00505f` | `#9edef0` |

#### blue — azul da marca `#034694` (Pantone 286 C), também usado como info

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-blue` | `#D6E4F5` | `#6BA3F53D` |
| `--color-border-blue` | `#A8C4E8` | `#6BA3F5` |
| `--color-icon-blue` | `#034694` | `#8BB8F8` |
| `--color-text-blue` | `#034694` | `#C5DBFC` |

#### purple — roxo destaque da marca `#7C51A1` (Pantone 7441 C)

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-purple` | `#EDE4F4` | `#7C51A13D` |
| `--color-border-purple` | `#D0BBE3` | `#A67BC4` |
| `--color-icon-purple` | `#7C51A1` | `#C4A3E0` |
| `--color-text-purple` | `#5C3A7A` | `#DCC8F0` |

#### pink

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-pink` | `#fccadc` | `#ff99c33D` |
| `--color-border-pink` | `#e7b7c8` | `#f273aa` |
| `--color-icon-pink` | `#83004b` | `#ff99c3` |
| `--color-text-pink` | `#83004b` | `#ffc3da` |

#### gray — neutro categórico, sem croma

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-background-gray` | `light-dark(#e5e5e5, var(--color-neutral))` | *(igual)* |
| `--color-border-gray` | `#d4d4d4` | `#262626` |
| `--color-icon-gray` | `#525252` | `#a3a3a3` |
| `--color-text-gray` | `#383838` | `#e5e5e5` |

## Motion

Mais rápido que o padrão do core, alinhado a convenções shadcn/Tailwind (fast 125ms, medium 300ms, slow 700ms, razão 0.75 para min/max).

| Token | Valor |
| --- | --- |
| `--duration-fast-min` | `95ms` |
| `--duration-fast` | `125ms` |
| `--duration-fast-max` | `165ms` |
| `--duration-medium-min` | `225ms` |
| `--duration-medium` | `300ms` |
| `--duration-medium-max` | `400ms` |
| `--duration-slow-min` | `525ms` |
| `--duration-slow` | `700ms` |
| `--duration-slow-max` | `935ms` |

## Tokens base do core (não sobrescritos pelo tema)

Escala de spacing em múltiplos de 4px. Use em `gap`/`padding` e nos props `gap` de `VStack`, `HStack` e `Grid`.

| Token | Valor |
| --- | --- |
| `--spacing-0` | `0px` |
| `--spacing-0-5` | `2px` |
| `--spacing-1` | `4px` |
| `--spacing-1-5` | `6px` |
| `--spacing-2` | `8px` |
| `--spacing-3` | `12px` |
| `--spacing-4` | `16px` |
| `--spacing-5` | `20px` |
| `--spacing-6` | `24px` |
| `--spacing-7` | `28px` |
| `--spacing-8` | `32px` |
| `--spacing-9` | `36px` |
| `--spacing-10` | `40px` |
| `--spacing-11` | `44px` |
| `--spacing-12` | `48px` |

## Overrides de componentes

Ajustes que o tema aplica por cima do estilo padrão dos componentes (classes `.pharos-<componente>.<variante>`). Resumo:

- **Button destructive**: fundo pastel vermelho (`--color-error-muted`) + texto vermelho (`--color-error`), em vez de preenchido.
- **Badge semânticos** (info/success/warning/error): preenchidos com cor saturada e texto contrastante (branco no claro, escuro no escuro); `info` usa o azul da marca.
- **Badge categóricos**: fundo + texto dos tokens do matiz (`--color-background-X` / `--color-text-X`).
- **StatusDot**: mesmas cores vivas dos badges preenchidos; `accent` segue o laranja da marca.
- **Banner**: texto e ícone na cor do matiz do status; `info` em azul.
- **Switch / ProgressBar**: trilho desligado usa `--color-border-emphasized` para se destacar do body.
- **Card / Section**: padding mais compacto (`--spacing-3`).

| Componente | Variante | Propriedade | Valor |
| --- | --- | --- | --- |
| `button` | `destructive` | `background-color` | `var(--color-error-muted)` |
| `button` | `destructive` | `color` | `var(--color-error)` |
| `badge` | `info` | `background-color` | `light-dark(#034694, #6BA3F5)` |
| `badge` | `info` | `color` | `light-dark(#ffffff, #171717)` |
| `badge` | `neutral` | `background-color` | `var(--color-background-gray)` |
| `badge` | `neutral` | `color` | `var(--color-text-gray)` |
| `badge` | `success` | `background-color` | `light-dark(#198100, #64af4c)` |
| `badge` | `success` | `color` | `light-dark(#ffffff, #171717)` |
| `badge` | `warning` | `background-color` | `#ffce2f` |
| `badge` | `warning` | `color` | `#171717` |
| `badge` | `error` | `background-color` | `light-dark(#e33f4a, #ff705d)` |
| `badge` | `error` | `color` | `light-dark(#ffffff, #171717)` |
| `badge` | `red` | `background-color` | `var(--color-background-red)` |
| `badge` | `red` | `color` | `var(--color-text-red)` |
| `badge` | `orange` | `background-color` | `var(--color-background-orange)` |
| `badge` | `orange` | `color` | `var(--color-text-orange)` |
| `badge` | `yellow` | `background-color` | `var(--color-background-yellow)` |
| `badge` | `yellow` | `color` | `var(--color-text-yellow)` |
| `badge` | `green` | `background-color` | `var(--color-background-green)` |
| `badge` | `green` | `color` | `var(--color-text-green)` |
| `badge` | `teal` | `background-color` | `var(--color-background-teal)` |
| `badge` | `teal` | `color` | `var(--color-text-teal)` |
| `badge` | `cyan` | `background-color` | `var(--color-background-cyan)` |
| `badge` | `cyan` | `color` | `var(--color-text-cyan)` |
| `badge` | `blue` | `background-color` | `var(--color-background-blue)` |
| `badge` | `blue` | `color` | `var(--color-text-blue)` |
| `badge` | `purple` | `background-color` | `var(--color-background-purple)` |
| `badge` | `purple` | `color` | `var(--color-text-purple)` |
| `badge` | `pink` | `background-color` | `var(--color-background-pink)` |
| `badge` | `pink` | `color` | `var(--color-text-pink)` |
| `badge` | `gray` | `background-color` | `var(--color-background-gray)` |
| `badge` | `gray` | `color` | `var(--color-text-gray)` |
| `statusdot` | `success` | `background-color` | `light-dark(#198100, #64af4c)` |
| `statusdot` | `warning` | `background-color` | `#ffce2f` |
| `statusdot` | `error` | `background-color` | `light-dark(#e33f4a, #ff705d)` |
| `statusdot` | `accent` | `background-color` | `light-dark(#F26641, #FF8A5C)` |
| `banner` | `info` | `background-color` | `var(--color-background-blue)` |
| `banner` | `info` | `--color-accent-muted` | `transparent` |
| `banner` | `info` | `--color-text-primary` | `var(--color-text-blue)` |
| `banner` | `info` | `--color-text-secondary` | `var(--color-text-blue)` |
| `banner` | `info` | `--color-accent` | `var(--color-text-blue)` |
| `banner` | `success` | `--color-text-primary` | `var(--color-text-green)` |
| `banner` | `success` | `--color-text-secondary` | `var(--color-text-green)` |
| `banner` | `success` | `--color-success` | `var(--color-text-green)` |
| `banner` | `warning` | `--color-text-primary` | `var(--color-text-yellow)` |
| `banner` | `warning` | `--color-text-secondary` | `var(--color-text-yellow)` |
| `banner` | `warning` | `--color-warning` | `var(--color-text-yellow)` |
| `banner` | `error` | `--color-text-primary` | `var(--color-text-red)` |
| `banner` | `error` | `--color-text-secondary` | `var(--color-text-red)` |
| `banner` | `error` | `--color-error` | `var(--color-text-red)` |
| `switch` | *(base)* | `--color-background-gray` | `var(--color-border-emphasized)` |
| `progressbar` | *(base)* | `--color-background-muted` | `var(--color-border-emphasized)` |
| `progressbar` | `accent` | `--color-accent` | `#F26641` |
| `progressbar` | `success` | `--color-success` | `#198100` |
| `progressbar` | `warning` | `--color-warning` | `#ffce2f` |
| `progressbar` | `error` | `--color-error` | `#e33f4a` |
| `card` | *(base)* | `--pharos-card-padding` | `var(--spacing-3)` |
| `section` | *(base)* | `--pharos-section-padding` | `var(--spacing-3)` |

## Ícones

O tema registra ícones semânticos usando [Lucide](https://lucide.dev) (`lucide-react`). Os componentes do core pedem ícones por nome semântico; o tema decide qual glifo usar. Para ícones próprios no app, use `lucide-react` diretamente dentro de `<Icon>` para manter o mesmo traço.

| Nome semântico | Ícone Lucide |
| --- | --- |
| `close` | `X` |
| `chevronDown` | `ChevronDown` |
| `chevronLeft` | `ChevronLeft` |
| `chevronRight` | `ChevronRight` |
| `check` | `Check` |
| `success` | `CheckCircle` |
| `error` | `XCircle` |
| `warning` | `AlertTriangle` |
| `info` | `Info` |
| `calendar` | `Calendar` |
| `clock` | `Clock` |
| `externalLink` | `ExternalLink` |
| `menu` | `Menu` |
| `moreHorizontal` | `MoreHorizontal` |
| `search` | `Search` |
| `arrowUp` | `ArrowUp` |
| `arrowDown` | `ArrowDown` |
| `arrowsUpDown` | `ArrowUpDown` |
| `funnel` | `Filter` |
| `eyeSlash` | `EyeOff` |
| `viewColumns` | `Columns` |
| `copy` | `Copy` |
| `checkDouble` | `CheckCheck` |
| `wrench` | `Wrench` |
| `stop` | `Square` |
| `microphone` | `Mic` |

## Uso

```tsx
import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import '@pharos-ds/core/reset.css';
import '@pharos-ds/core/pharos.css';
import '@pharos-ds/theme-pharos/theme.css';

<Theme theme={pharosTheme} mode="system">
  {children}
</Theme>
```

Caminhos de import do pacote:

| Caminho | Uso |
| --- | --- |
| `@pharos-ds/theme-pharos` | fonte (StyleX via `@pharos-ds/build`) |
| `@pharos-ds/theme-pharos/built` | tema pré-compilado (`pharosTheme`) |
| `@pharos-ds/theme-pharos/theme.css` | CSS pré-compilado com os tokens acima |

Para derivar um tema próprio a partir deste, defina um tema TypeScript com `defineTheme` e gere o CSS: `npx @pharos-ds/cli theme build src/meuTema.ts --out src/meuTema.css`.
