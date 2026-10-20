---
title: "Token"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Token"
source: /componentes/Token
---

# Token

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Token é um elemento pequeno e inline para representar pedaços discretos de dados associados, como tags, categorias ou seleções. Use-o para rotular conteúdo, mostrar filtros ativos ou representar itens removíveis como destinatários selecionados em um campo de composição.

## Importação

```tsx
import {Token} from '@pharos-ds/core/Token';
```

## Exemplos

### Área interativa

```tsx
import {Token} from '@pharos-ds/core/Token';

<Token
  size="md"
  color="default"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `color`: `default` · `red` · `orange` · `yellow` · `green` · `teal` · `cyan` · `blue` · `purple` · `pink` · `gray` (padrão `default`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use color para distinguir categorias (por exemplo, verde para "Active", vermelho para "Blocked", azul para "In Review") para que usuários escaneiem status de relance.
- **Faça:** Forneça um callback onRemove quando tokens representarem seleções do usuário que podem ser desfeitas, como filtros ou valores multi-select.
- **Faça:** Adicione um ícone à esquerda quando ele ajudar a identificar o tipo de token mais rápido, como um ícone de pessoa para tokens de usuário ou ícone de tag para labels.
- **Faça:** Mantenha labels curtos: uma a três palavras. Tokens truncam com ellipsis quando o texto transborda.
- **Evite:** Não use tokens para ações primárias ou navegação; use Button ou Link em vez disso. Tokens são para exibir metadados, não disparar workflows.
- **Evite:** Não oculte o label a menos que o ícone sozinho seja universalmente compreendido. Um dot colorido sem texto é ambíguo.
- **Evite:** Não misture muitas cores em um grupo de tokens. Limite-se a duas ou três cores significativas para que a paleta permaneça escaneável.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Label de texto exibido dentro do token. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | O size do token. |
| `color` | `'default' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'cyan' \| 'blue' \| 'purple' \| 'pink' \| 'gray'` | não | `'default'` | Variant de color do token. |
| `icon` | `ReactNode` | não | — | Ícone opcional renderizado antes do label. |
| `isDisabled` | `boolean` | não | `false` | Se o token está desabilitado; reduz opacidade e bloqueia interações. |
| `onRemove` | `(e: React.MouseEvent) => void` | não | — | Callback disparado quando o botão de remover é clicado. Quando fornecido, um botão X é renderizado dentro do token. |
| `onClick` | `(e: React.MouseEvent) => void` | não | — | Handler de clique. Quando fornecido, o token renderiza como um container <span> com um <button> invisível dentro para acessibilidade. |
| `href` | `string` | não | — | URL do link. Quando fornecido, o token renderiza como um elemento <a>. |
| `description` | `string` | não | — | Description acessível aplicada via aria-description no elemento raiz. |
| `endContent` | `ReactNode` | não | — | Conteúdo renderizado após o label e antes do botão de remover. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label usando técnica de clip screen-reader-only; o label permanece acessível. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Token` · Docs atualizadas: `npx @pharos-ds/cli component Token`
