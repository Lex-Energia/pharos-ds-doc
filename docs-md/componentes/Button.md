---
title: "Button"
group: "Button"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Button"
source: /componentes/Button
---

# Button

**Grupo:** Button · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Button dispara uma ação quando clicado. Use para envio de formulários, confirmações, navegação ou qualquer interação que precise de uma call to action clara.

## Importação

```tsx
import {Button} from '@pharos-ds/core/Button';
```

## Exemplos

### Área interativa

```tsx
import {Button} from '@pharos-ds/core/Button';

<Button
  label="Botão"
  variant="secondary"
  size="md"
  isLoading={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `primary` · `secondary` · `ghost` · `destructive` (padrão `secondary`)
- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isLoading`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Reserve primary para a ação mais importante da view. Use secondary ou ghost para todo o resto, conforme a ênfase.
- **Faça:** Escreva rótulos que descrevam a ação ("Salvar alterações", "Excluir conta", "Enviar convite"), não rótulos vagos como "OK" ou "Clique aqui".
- **Faça:** Mostre um estado de loading para ações que levam tempo, como salvar ou enviar, para que o usuário saiba que está em andamento.
- **Faça:** Sempre forneça um rótulo para botões somente com ícone, para que leitores de tela anunciem o que o botão faz. Adicione um tooltip para usuários videntes.
- **Faça:** Para um botão dedicado somente com ícone, use IconButton de '@pharos-ds/core/IconButton'. É um componente separado, não exportado de '@pharos-ds/core/Button'.
- **Evite:** Coloque mais de um botão primary na mesma view; isso dilui a hierarquia visual.
- **Evite:** Use a variant destructive sem uma etapa de confirmação para ações irreversíveis como excluir dados.
- **Evite:** Use um botão para navegação. Se ele apenas leva o usuário a outra página, use um link. Botões são para ações como salvar, excluir ou enviar.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo acessível. Renderizado como texto visível por padrão; usado como aria-label quando isIconOnly é true. |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive'` | não | `'secondary'` | Variant de estilo visual. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variant de tamanho. |
| `elevation` | `'none' \| 'low' \| 'med' \| 'high'` | não | `'none'` | Profundidade de sombra em repouso para botões flutuantes (ex.: um FAB). `none` é o botão plano padrão; `low`/`med`/`high` mapeiam para a escala de tokens de sombra. Ignorado dentro de um ButtonGroup, onde a elevation é controlada pelo grupo. |
| `type` | `'button' \| 'submit' \| 'reset'` | não | `'button'` | Atributo HTML type do botão. |
| `name` | `string` | não | — | Atributo HTML name para envio de formulário. |
| `value` | `string \| number \| readonly string[]` | não | — | Atributo HTML value para envio de formulário. |
| `form` | `string` | não | — | Associa o botão a um elemento form por ID. |
| `isLoading` | `boolean` | não | `false` | Mostra um spinner de loading e desabilita a interação. Anuncia "Loading" via live region. |
| `isInterruptible` | `boolean` | não | `false` | Mantém o botão clicável enquanto um clickAction está pendente: o spinner e aria-busy ainda aparecem, mas o botão não é desabilitado e a ação não é deduplicada, então um novo clique chega e interrompe a ação em andamento com uma nova. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o botão. Quando há tooltip, usa aria-disabled em vez de disabled nativo, para que o botão permaneça focável. |
| `icon` | `ReactNode` | não | — | Elemento de ícone renderizado antes do texto do rótulo. |
| `isIconOnly` | `boolean` | não | `false` | Quando true, renderiza como botão quadrado somente com ícone, com label como aria-label. Requer icon. Dica: para um componente dedicado somente com ícone, use IconButton de '@pharos-ds/core/IconButton'. |
| `width` | `SizeValue` | não | — | Largura do botão. Números são tratados como pixels; strings são usadas como estão (ex.: '100%' para botão full-width). Por padrão, o botão se dimensiona ao conteúdo. |
| `children` | `ReactNode` | não | — | Sobrescrita opcional do texto visível. Quando fornecido, é exibido no lugar de label, mas label ainda é obrigatório (fornece o nome acessível). Na maioria dos casos, use apenas label: <Button label="Save" />. |
| `endContent` | `ReactElement<IconProps> \| ReactElement<BadgeProps>` | não | — | Ícone ou badge trailing renderizado após o rótulo. Ignorado quando isIconOnly é true. A cor é herdada da variant do botão. |
| `tooltip` | `string` | não | — | Texto do tooltip exibido ao passar o mouse. |
| `onClick` | `(e: MouseEvent) => void` | não | — | Handler padrão de clique (repassado de ButtonHTMLAttributes). |
| `clickAction` | `(e: MouseEvent) => void \| Promise<void>` | não | — | Handler assíncrono de clique. Mostra estado de loading enquanto a promise retornada está pendente. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Button` · Docs atualizadas: `npx @pharos-ds/cli component Button`
