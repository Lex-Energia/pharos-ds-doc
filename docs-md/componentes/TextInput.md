---
title: "TextInput"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/TextInput"
source: /componentes/TextInput
---

# TextInput

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

TextInput coleta texto de formulário curto como nomes, e-mails ou consultas de busca. Use-o para valores de uma linha em que a entrada esperada é breve. Emparelhe-o com status de validação para orientar usuários em campos obrigatórios ou formatados.

## Importação

```tsx
import {TextInput} from '@pharos-ds/core/TextInput';
```

## Exemplos

### Área interativa

```tsx
import {TextInput} from '@pharos-ds/core/TextInput';

<TextInput
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Sempre forneça um label visível para que usuários saibam para que serve o campo. Oculte o label apenas quando o contexto ao redor o tornar óbvio, como uma barra de busca com ícone de lupa.
- **Faça:** Use status de validação com mensagem para explicar o que deu errado: "Email must include @" é melhor do que apenas deixar a borda vermelha.
- **Faça:** Dimensione o input para corresponder ao comprimento esperado do conteúdo para que usuários saibam quanto digitar: small para CEPs, medium para nomes, large para URLs.
- **Faça:** Adicione um botão de limpar para inputs de busca e filtro para que usuários possam redefinir rapidamente sem selecionar todo o texto.
- **Evite:** Não use placeholder text como substituto de label; placeholders desaparecem no focus e não são lidos de forma confiável por leitores de tela.
- **Evite:** Não use TextInput para conteúdo multi-linha como comentários ou descrições; use TextArea em vez disso.
- **Evite:** Não marque todo campo como required; marque apenas campos obrigatórios para que usuários não fiquem sobrecarregados com erros de validação.
- **Evite:** Não envolva um TextInput desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados engolem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `type` | `'text' \| 'password' \| 'email'` | não | `'text'` | O HTML input type. |
| `label` | `string` | sim | — | Texto do label do input: sempre renderizado para acessibilidade. |
| `value` | `string` | sim | — | Valor atual do input. |
| `onChange` | `(value: string, e: ChangeEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o valor do input muda. |
| `changeAction` | `(value: string, e: ChangeEvent<HTMLInputElement>) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange (se não impedida). Dispara atualização otimista e exibe spinner de carregamento enquanto pendente. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variante de size do input. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label mantendo-o acessível a leitores de tela. |
| `description` | `string` | não | — | Texto de description exibido entre o label e o input. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador "Optional" ao lado do label. Mutuamente exclusivo com isRequired. |
| `isRequired` | `boolean` | não | `false` | Exibe um indicador "Required" ao lado do label e define aria-required. Mutuamente exclusivo com isOptional. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input, impedindo interação e esmaecendo o elemento. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, exibe um tooltip no hover/foco via teclado e mantém o input focável via aria-disabled (o campo torna-se read-only). Use isto em vez de envolver um TextInput desabilitado em Tooltip. Controles desabilitados engolem os eventos de hover que um Tooltip externo precisa. |
| `isLoading` | `boolean` | não | `false` | Coloca o input em estado de carregamento, exibindo um spinner e definindo aria-busy. |
| `placeholder` | `string` | não | — | Texto placeholder exibido quando o input está vazio. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido em um ícone de info no final do label. |
| `startIcon` | `IconType` | não | — | Componente de ícone SVG exibido no início do input. Veja `pharos docs icons` para nomes semânticos válidos. |
| `status` | `{type: 'error' \| 'warning' \| 'success', message?: string}` | não | — | Status de validação: aplica uma borda colorida e ícone de status. Se message for fornecida, exibe uma mensagem flutuante abaixo do input. O tipo error também define aria-invalid. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `hasClear` | `boolean` | não | `false` | Exibe um botão de limpar (×) quando o input tem um valor. Clicar nele limpa o value e devolve o foco ao input. |
| `hasAutoFocus` | `boolean` | não | `false` | Foca automaticamente o input ao montar. |
| `htmlName` | `string` | não | — | Atributo HTML name do input, útil para submissões de formulário. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (label, controle e status) para que permaneçam alinhados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TextInput` · Docs atualizadas: `npx @pharos-ds/cli component TextInput`
