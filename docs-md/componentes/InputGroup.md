---
title: "InputGroup"
group: "Field"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/InputGroup"
source: /componentes/InputGroup
---

# InputGroup

**Grupo:** Field · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

InputGroup conecta um input com addons de prefix/suffix em uma única unidade visual. Use para campos de URL, inputs de moeda, campos de busca com botões de ação ou qualquer input que precise de decorações contextuais.

## Importação

```tsx
import {InputGroup} from '@pharos-ds/core/InputGroup';
```

## Exemplos

### Área interativa

```tsx
import {InputGroup} from '@pharos-ds/core/InputGroup';

<InputGroup
  label="Site"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use addons de texto para mostrar unidades, prefixos ou sufixos que esclarecem o formato do input (ex.: "$", "kg", "https://").
- **Faça:** Use InputGroupText para prefixos/sufixos estáticos como "$", "kg" ou "https://".
- **Faça:** Use InputGroup com inputs single-line compatíveis: TextInput, NumberInput, TimeInput, DateInput, Typeahead, Selector e MultiSelector.
- **Faça:** Mantenha o label de cada input interno específico; inputs agrupados combinam automaticamente o label do grupo com seu próprio label e herdam o contexto de description/status do grupo.
- **Evite:** Não coloque múltiplos text inputs em um grupo; use fields separados.
- **Evite:** Não use InputGroup para inputs não relacionados; é para um único input com decorações.
- **Evite:** Não use InputGroup com TextArea, Slider, Switch, CheckboxInput ou RadioList.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Filhos InputGroupText e inputs compatíveis: TextInput, NumberInput, TimeInput, DateInput, Typeahead, Selector ou MultiSelector. |
| `label` | `string` | sim | — | Label acessível para o grupo. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label. |
| `description` | `string` | não | — | Texto de ajuda entre o label e o input group. |
| `isDisabled` | `boolean` | não | `false` | Desabilita todo o grupo. |
| `isOptional` | `boolean` | não | `false` | Exibe indicador "(optional)". |
| `isRequired` | `boolean` | não | `false` | Marca o field como required. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho padrão para inputs no grupo. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Indicador de status aplicado à borda do grupo. |
| `labelTooltip` | `string` | não | — | Texto de tooltip no final do label. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. |
| `data-testid` | `string` | não | — | Seletor de teste. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/InputGroup` · Docs atualizadas: `npx @pharos-ds/cli component InputGroup`
