---
title: "Collapsible"
group: "Collapsible"
category: "Container"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Collapsible"
source: /componentes/Collapsible
---

# Collapsible

**Grupo:** Collapsible · **Categoria:** Container · **Pacote:** `@pharos-ds/core`

Collapsible oculta e revela conteúdo atrás de um botão trigger. Use-o em painéis de configurações, páginas de FAQ ou visualizações de detalhes para manter a página escaneável enquanto permite que usuários aprofundem nas seções que lhes interessam. Envolva múltiplos collapsibles em CollapsibleGroup para comportamento de accordion. Para componentes collapsible personalizados, use o hook `useCollapsible` diretamente (`pharos hook useCollapsible`).

## Importação

```tsx
import {Collapsible} from '@pharos-ds/core/Collapsible';
```

## Exemplos

### Área interativa

```tsx
import {Collapsible} from '@pharos-ds/core/Collapsible';

<Collapsible
  trigger="Detalhes"
  defaultIsOpen
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `defaultIsOpen`: boolean (padrão `true`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use hasDividers em CollapsibleGroup para listas estilo FAQ: hairlines de linha integradas com tokens de borda temáticos, sem bordas manuais.
- **Faça:** Envolva cada Collapsible em um Card para separação visual em layouts de accordion, ou use hasDividers do CollapsibleGroup para listas planas; não combine ambos.
- **Faça:** Use CollapsibleGroup com type="single" para páginas de configurações ou FAQ em que apenas uma seção deve estar aberta por vez.
- **Faça:** Use type="multiple" quando usuários precisarem comparar conteúdo entre seções, como listas de recursos ou níveis de preço.
- **Faça:** Inicie seções abertas (defaultIsOpen) quando o conteúdo provavelmente for necessário na primeira visualização; não faça usuários clicarem para ver informações essenciais.
- **Evite:** Oculte conteúdo crítico ou obrigatório atrás de um collapsible; usuários podem não descobri-lo.
- **Evite:** Aninhe collapsibles mais de dois níveis de profundidade; torna o conteúdo difícil de encontrar e navegar.
- **Evite:** Use um collapsible para um único parágrafo curto; mostre o texto diretamente em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `trigger` | `ReactNode` | sim | — | Conteúdo exibido na área do trigger (sempre visível). |
| `children` | `ReactNode` | não | — | Conteúdo que colapsa e expande. |
| `defaultIsOpen` | `boolean` | não | `true` | Estado aberto padrão (não controlado). |
| `isOpen` | `boolean` | não | — | Estado aberto controlado. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o item para que seu trigger não possa ser alternado (esmaecido, aria-disabled e fora da ordem de tab). Não colapsa um item já aberto. |
| `onOpenChange` | `(isOpen: boolean) => void` | não | — | Callback invocado quando o estado aberto muda. |
| `value` | `string` | não | — | Identificador usado para coordenação de grupo. Obrigatório quando colocado dentro de um CollapsibleGroup. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Collapsible` · Docs atualizadas: `npx @pharos-ds/cli component Collapsible`
