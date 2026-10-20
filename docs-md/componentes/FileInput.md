---
title: "FileInput"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/FileInput"
source: /componentes/FileInput
---

# FileInput

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

FileInput fornece upload de arquivos com suporte opcional a drag-and-drop. Use para seleção de um ou múltiplos arquivos com validação integrada de tipo, tamanho e quantidade. Combine com status de validação para feedback de upload.

## Importação

```tsx
import {FileInput} from '@pharos-ds/core/FileInput';
```

## Exemplos

### Área interativa

```tsx
import {FileInput} from '@pharos-ds/core/FileInput';

<FileInput
  label="Anexo"
  mode="input"
  isMultiple={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `mode`: `input` · `dropzone` (padrão `input`)
- `isMultiple`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Sempre especifique a prop accept para orientar usuários em direção a tipos de arquivo válidos.
- **Faça:** Use maxSize e maxFiles para evitar uploads grandes demais; o componente trata validação e exibição de erro automaticamente.
- **Faça:** Adicione uma description para comunicar restrições como limites de tamanho ou formatos aceitos.
- **Faça:** Use changeAction para fluxos de upload imediato que se beneficiam de UI otimista.
- **Evite:** Não use FileInput para upload de diretórios ou pastas; isso não é suportado na v1.
- **Evite:** Não evite o modo dropzone a menos que o espaço seja restrito; drag-and-drop é a interação esperada para uploads de arquivo.
- **Evite:** Não envolva um FileInput desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo acessível para o file input. |
| `value` | `File \| File[] \| null` | sim | — | Arquivo(s) atualmente selecionado(s). Componente controlado. |
| `onChange` | `(files: File \| File[] \| null) => void` | sim | — | Callback disparado quando arquivos são selecionados ou removidos. |
| `changeAction` | `(files: File \| File[] \| null) => Promise<void>` | não | — | Ação assíncrona de mudança (padrão React 19 transitions). Use para upload imediato na seleção de arquivo. |
| `accept` | `string` | não | — | Tipos de arquivo aceitos. Usa o formato do atributo HTML accept (ex. "image/*", ".pdf,.doc"). |
| `isMultiple` | `boolean` | não | `false` | Se múltiplos arquivos podem ser selecionados. Quando true, value e onChange usam File[] em vez de File. |
| `maxSize` | `number` | não | — | Tamanho máximo de arquivo em bytes. Arquivos que excedem são rejeitados com status de erro. |
| `maxFiles` | `number` | não | — | Número máximo de arquivos (aplica-se apenas quando isMultiple é true). |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo, mantendo-o acessível a leitores de tela. |
| `description` | `string` | não | — | Texto de description exibido entre o rótulo e o input. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador "Optional" ao lado do rótulo. Mutuamente exclusivo com isRequired. |
| `isRequired` | `boolean` | não | `false` | Exibe um indicador "Required" ao lado do rótulo e adiciona uma description "Required" visível apenas para leitores de tela ao trigger (tecnologias assistivas não anunciam aria-required no trigger de forma confiável). Mutuamente exclusivo com isOptional. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input, impedindo interação e esmaecendo o elemento. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o trigger focável via aria-disabled (abrir o seletor de arquivos permanece bloqueado). Use isso em vez de envolver um FileInput desabilitado em Tooltip; controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `isLoading` | `boolean` | não | `false` | Coloca o input em estado de loading, mostrando um spinner e definindo aria-busy. |
| `placeholder` | `string` | não | `"Choose file" or "Choose files"` | Texto placeholder exibido quando nenhum arquivo está selecionado. |
| `mode` | `'input' \| 'dropzone'` | não | `'input'` | Modo visual. 'input' é um estilo inline compacto; 'dropzone' é uma área maior com suporte a drag-and-drop. |
| `status` | `{type: 'error' \| 'warning' \| 'success', message?: string}` | não | — | Status de validação: aplica uma borda colorida. Se message for fornecida, exibe uma mensagem flutuante abaixo do input. O tipo error também define aria-invalid. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido em um ícone de info no final do rótulo. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex. "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para mantê-los alinhados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/FileInput` · Docs atualizadas: `npx @pharos-ds/cli component FileInput`
