---
title: "AppShell"
group: "AppShell"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/AppShell"
source: /componentes/AppShell
---

# AppShell

**Grupo:** AppShell · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

O layout mais externo de uma aplicação. Oferece slots para navegação superior, navegação lateral, banners e conteúdo principal. Use como wrapper raiz em todas as páginas. Gerencia navegação mobile responsiva e skip-to-content automaticamente. Configure o colapso da navegação lateral no SideNav com a prop collapsible.

## Importação

```tsx
import {AppShell} from '@pharos-ds/core/AppShell';
```

## Exemplos

### Área interativa

```tsx
import {AppShell} from '@pharos-ds/core/AppShell';

<AppShell
  variant="elevated"
  height="auto"
 />
```

Valores explorados na demo interativa:

- `variant`: `elevated` · `wash` · `surface` · `section` (padrão `elevated`)
- `height`: `fill` · `auto` (padrão `auto`)

## Boas práticas

- **Faça:** Escolha a altura correta: use "fill" para dashboards com rolagem interna e "auto" para páginas que crescem com o conteúdo.
- **Faça:** Defina `contentPadding` com base no tipo de conteúdo: 4 para formulários e configurações, 0 para tabelas e dashboards.
- **Evite:** Aninhe um AppShell dentro de outro; ele é o frame de layout mais externo.
- **Evite:** Use para layouts de subpágina; use Layout para áreas de conteúdo dentro do AppShell.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Área de conteúdo principal, renderizada dentro de um elemento <main>. |
| `contentPadding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | `0` | Padding da área de conteúdo principal. Defina com base no padrão de conteúdo dominante: 4 (16px) para formulários/configurações/texto, 0 para dashboards/mapas/tabelas. Sobrescreva seções individuais com Section. |
| `topNav` | `ReactNode` | não | — | Slot de navegação superior, normalmente TopNav. |
| `sideNav` | `ReactNode` | não | — | Slot de navegação lateral, normalmente SideNav. |
| `mobileNav` | `ReactNode` | não | — | Configuração de navegação mobile. Aceita false (desabilitar), um objeto de configuração (ajustar comportamento automático) ou ReactNode (drawer totalmente customizado). O objeto de configuração é {hasToggle?: boolean, isOpen?: boolean, onOpenChange?: (isOpen: boolean) => void, content?: ReactNode, breakpoint?: 'sm' \| 'md' \| 'lg' \| 'none', defaultIsMobile?: boolean}; breakpoint tem padrão 'md'. |
| `banner` | `ReactNode` | não | — | Slot de banner para anúncios em todo o sistema, posicionado acima do topNav. |
| `height` | `'fill' \| 'auto'` | não | `'fill'` | Comportamento de altura: 'fill' faz o shell preencher a viewport (100dvh) com containers de rolagem independentes; 'auto' deixa o shell crescer com o conteúdo e usa posicionamento sticky para a navegação. |
| `variant` | `'wash' \| 'surface' \| 'section' \| 'elevated'` | não | `'elevated'` | Estilo de fundo da navegação que controla como as áreas de navegação contrastam com o conteúdo. 'wash' usa fundo wash, 'surface' usa fundo surface, 'section' adiciona divisores entre navegação e conteúdo, 'elevated' usa navegação wash com conteúdo surface elevado e border radius. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/AppShell` · Docs atualizadas: `npx @pharos-ds/cli component AppShell`
