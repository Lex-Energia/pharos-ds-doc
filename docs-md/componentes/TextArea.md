---
title: "TextArea"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/TextArea"
source: /componentes/TextArea
---

# TextArea

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

TextArea é um input de texto multi-linha para coletar conteúdo mais longo como comentários, descrições ou mensagens. Use quando a entrada esperada abrange várias linhas. Para valores curtos de linha única, use TextInput.

## Importação

```tsx
import {TextArea} from '@pharos-ds/core/TextArea';
```

## Exemplos

### Área interativa

```tsx
import {TextArea} from '@pharos-ds/core/TextArea';

<TextArea
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Forneça um rótulo visível para que os usuários saibam o que inserir. Se o rótulo precisar ficar oculto, defina isLabelHidden com um rótulo descritivo para leitores de tela.
- **Faça:** Defina maxLength com contador de caracteres quando houver limite definido; ajuda os usuários a permanecer dentro do limite antes de enviar.
- **Faça:** Use a prop status para exibir feedback de validação inline: success quando válido, warning para limites suaves e error para falhas definitivas.
- **Faça:** Adicione description ou placeholder para esclarecer o conteúdo esperado, como "Descreva o problema em detalhes", mas nunca use placeholder sozinho como único rótulo.
- **Evite:** Evite usar TextArea para valores curtos de linha única como nomes ou e-mails; use TextInput em vez disso.
- **Evite:** Não dependa apenas de placeholder para comunicar o propósito do campo; placeholders desaparecem no focus e não são rótulos acessíveis.
- **Evite:** Não exiba uma mensagem de status sem definir também o tipo de status; a borda colorida e o ícone são o que chamam a atenção do usuário para a mensagem.
- **Evite:** Não envolva um TextArea desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `ref` | `React.Ref<HTMLTextAreaElement>` | não | — | Ref encaminhada ao elemento <textarea> subjacente. |
| `label` | `string` | sim | — | Texto do rótulo do textarea. Sempre renderizado para acessibilidade. |
| `value` | `string` | sim | — | Valor atual do textarea. |
| `onChange` | `(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void` | não | — | Callback disparado quando o valor do textarea muda. |
| `changeAction` | `(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange dentro de uma React transition. Habilita atualizações otimistas via useOptimistic. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo mantendo-o acessível a leitores de tela. |
| `description` | `string` | não | — | Texto de ajuda exibido entre o rótulo e o textarea. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador "Optional" ao lado do rótulo. Mutuamente exclusivo com isRequired. |
| `isRequired` | `boolean` | não | `false` | Exibe um indicador "Required" ao lado do rótulo e define aria-required. Mutuamente exclusivo com isOptional. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o textarea, impedindo interação. |
| `disabledMessage` | `string` | não | — | Explica por que o textarea está desabilitado. Com isDisabled, exibe um tooltip no hover/foco por teclado e mantém o textarea focável via aria-disabled (o campo fica somente leitura). Use isto em vez de envolver um TextArea desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `isLoading` | `boolean` | não | `false` | Coloca o textarea em estado de carregamento, exibindo um spinner dentro do input. |
| `placeholder` | `string` | não | — | Texto placeholder exibido quando o textarea está vazio. |
| `rows` | `number` | não | `3` | Número de linhas de texto visíveis. |
| `maxLength` | `number` | não | — | Número máximo de caracteres permitidos. Quando definido, um contador (atual/máx) é exibido abaixo do textarea. Não impõe o limite nativamente; o contador exibe estilo de error quando excedido. |
| `status` | `{ type: 'warning' \| 'error' \| 'success'; message?: string }` | não | — | Indicador de status que aplica borda colorida e ícone. Uma message opcional é exibida em uma caixa flutuante abaixo do textarea. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido em um ícone de info no final do rótulo. |
| `startIcon` | `IconType` | não | — | Componente de ícone renderizado na borda inicial do wrapper do textarea. Veja `pharos docs icons` para nomes semânticos válidos. |
| `hasSpellCheck` | `boolean` | não | `true` | Habilita ou desabilita a verificação ortográfica do navegador. |
| `hasAutoFocus` | `boolean` | não | `false` | Foca automaticamente o textarea ao montar. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do textarea, afetando padding interno. A altura é controlada por rows, não por size. |
| `onPaste` | `(e: ClipboardEvent<HTMLTextAreaElement>) => void` | não | — | Callback disparado quando conteúdo é colado no textarea. |
| `htmlName` | `string` | não | — | Atributo HTML name do elemento textarea, útil para envio de formulários. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para que permaneçam alinhados. |
| `onFocus` | `(e: FocusEvent<HTMLTextAreaElement>) => void` | não | — | Callback disparado quando o textarea recebe focus. |
| `onBlur` | `(e: FocusEvent<HTMLTextAreaElement>) => void` | não | — | Callback disparado quando o textarea perde focus. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TextArea` · Docs atualizadas: `npx @pharos-ds/cli component TextArea`
