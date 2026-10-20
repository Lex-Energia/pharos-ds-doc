---
title: "TopNavMegaMenu"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNavMegaMenu"
source: /componentes/TopNavMegaMenu
---

# TopNavMegaMenu

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de navegação que exibe um painel de mega menu em largura total no hover. Usa uma API de slots com props items e featured. TopNavMegaMenuItem se renderiza nos modos desktop e drawer mobile. Suporta drawer colapsável inline via contexto de render mode.

## Importação

```tsx
import {TopNavMegaMenu} from '@pharos-ds/core/TopNavMegaMenu';
```

## Exemplos

### Área interativa

```tsx
import {TopNavMegaMenu} from '@pharos-ds/core/TopNavMegaMenu';

<TopNavMegaMenu
  label="Plataforma"
 />
```

Valores explorados na demo interativa:

- `label`: `Plataforma` · `Soluções` · `Recursos` (padrão `Plataforma`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo visível do botão trigger. |
| `items` | `ReactNode` | não | — | Slot de itens do menu: tipicamente componentes TopNavMegaMenuItem, mas aceita qualquer ReactNode. |
| `featured` | `ReactNode` | não | — | Slot de conteúdo em destaque: renderizado no painel direito no desktop, abaixo dos itens no drawer mobile. |
| `delay` | `number` | não | `150` | Atraso em milissegundos antes de exibir o menu no hover. |
| `hideDelay` | `number` | não | `250` | Atraso em milissegundos antes de ocultar o menu após o mouse sair. |
| `onOpenChange` | `(isOpen: boolean) => void` | não | — | Callback disparado quando o mega menu abre ou fecha. Útil para coordenar estilos do wrapper. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNavMegaMenu` · Docs atualizadas: `npx @pharos-ds/cli component TopNavMegaMenu`
