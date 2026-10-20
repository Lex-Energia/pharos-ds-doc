---
title: "MultiSelector"
group: "Selector"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/MultiSelector"
source: /componentes/MultiSelector
---

# MultiSelector

**Grupo:** Selector · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Dropdown com checkbox para selecionar múltiplos valores de uma lista. Itens selecionados podem ser exibidos como contagem, rótulos ou badges. Use para filtragem ou ao apresentar um conjunto finito de opções em que múltiplas escolhas são necessárias.

## Importação

```tsx
import {MultiSelector} from '@pharos-ds/core/MultiSelector';
```

## Exemplos

### Área interativa

```tsx
import {MultiSelector} from '@pharos-ds/core/MultiSelector';

<MultiSelector
  size="md"
  triggerDisplay="count"
  hasSelectAll={false}
  hasSearch={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `triggerDisplay`: `count` · `labels` · `badges` (padrão `count`)
- `hasSelectAll`: boolean (padrão `false`)
- `hasSearch`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use para um conjunto moderado e finito de opções em que múltiplas escolhas são necessárias.
- **Faça:** Ative filtragem de busca quando a lista exceder ~15 opções.
- **Faça:** Use renderOption para linhas de opção customizadas; o affordance de checkbox permanece controlado pelo MultiSelector.
- **Faça:** Ative select-all quando a maioria dos usuários quiser todas ou quase todas as opções selecionadas.
- **Faça:** Use dentro de InputGroup apenas quando o controle precisar de um addon curto de prefixo ou sufixo como parte de uma superfície de input decorada; prefira exibição de trigger count ou labels para manter o grupo em uma linha.
- **Evite:** Use para seleção de valor único; use Selector.
- **Evite:** Mostre mais de ~20 opções sem ativar busca.
- **Evite:** Envolva um MultiSelector desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component MultiSelector`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/MultiSelector` · Docs atualizadas: `npx @pharos-ds/cli component MultiSelector`
