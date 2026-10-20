---
title: "PowerSearch"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/PowerSearch"
source: /componentes/PowerSearch
---

# PowerSearch

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

PowerSearch é uma barra de filtros estruturada em que cada token representa um campo, operador e valor. Use para filtragem multi-dimensional complexa quando usuários precisam combinar múltiplos critérios de busca. Para busca simples de campo único, use um text input.

## Importação

```tsx
import {PowerSearch} from '@pharos-ds/core/PowerSearch';
```

## Exemplos

### Área interativa

```tsx
import {PowerSearch} from '@pharos-ds/core/PowerSearch';

<PowerSearch
  size="md"
  isDisabled={false}
  hasClear
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)
- `hasClear`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Defina nomes de campo e aliases claros e descritivos, para que usuários encontrem rapidamente o filtro necessário.
- **Faça:** Forneça uma contagem de resultados para dar feedback sobre como os filtros afetam o conjunto de dados.
- **Evite:** Use PowerSearch para buscas simples por palavra-chave; um text input padrão é mais apropriado para lookups de campo único.
- **Evite:** Envolva um PowerSearch desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `config` | `PowerSearchConfig` | sim | — | Configuração que define campos disponíveis, operadores e seus tipos de valor. |
| `filters` | `ReadonlyArray<PowerSearchFilter>` | sim | — | Filtros atualmente ativos. |
| `onChange` | `(filters: ReadonlyArray<PowerSearchFilter>, changeType: 'add' \| 'edit' \| 'remove', index: number) => void` | sim | — | Chamado quando filtros mudam. changeType é 'add', 'edit' ou 'remove'. index é a posição do filtro afetado. |
| `label` | `string` | não | `'Search'` | Rótulo acessível para o input de busca. |
| `isLabelHidden` | `boolean` | não | `true` | Oculta visualmente o rótulo, mantendo-o acessível. |
| `placeholder` | `string` | não | `'Search...'` | Texto placeholder exibido quando nenhum filtro está selecionado. |
| `hasAutoFocus` | `boolean` | não | `false` | Auto-foca o input ao montar. |
| `hasClear` | `boolean` | não | `true` | Mostra um botão de limpar tudo para remover todos os filtros. |
| `isReadOnly` | `boolean` | não | `false` | Impede adicionar, editar ou remover filtros. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o componente inteiro. |
| `disabledMessage` | `string` | não | — | Explica por que a busca está desabilitada. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o input focável via aria-disabled (input permanece bloqueado). Use isso em vez de envolver um PowerSearch desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Objeto de status de validação com type e message opcional. |
| `startIcon` | `ReactNode \| IconType` | não | — | Ícone exibido no início do input, antes de quaisquer tokens de filtro. Encaminhado para o Tokenizer interno. Aceita um nome semântico de ícone, um componente SVG de ícone ou um ReactNode diretamente. |
| `statusVariant` | `'attached' \| 'detached'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento. |
| `maxTokenLength` | `number` | não | `40` | Comprimento máximo de caracteres para exibição do valor de filtro em tokens. |
| `popoverSaveButtonLabel` | `string` | não | `'Apply'` | Rótulo do botão salvar no popover de edição. |
| `timezoneID` | `string` | não | — | ID de timezone para formatação de data (ex. "America/New_York"). |
| `handleRef` | `Ref<PowerSearchHandle>` | não | — | Handle imperativo com métodos focusTypeahead() e blurTypeahead(). |
| `endContent` | `ReactNode` | não | — | Conteúdo exibido no final da linha do input. Útil para botões de ação ou outros controles. |
| `resultCount` | `number \| string` | não | — | Número de resultados que correspondem aos filtros atuais. Quando número, formatado como "N results". Quando string, exibido como está. Mudanças são anunciadas a leitores de tela via live region polite. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do input de busca e dos tokens. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/PowerSearch` · Docs atualizadas: `npx @pharos-ds/cli component PowerSearch`
