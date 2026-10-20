---
title: "Avatar"
group: "Avatar"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Avatar"
source: /componentes/Avatar
---

# Avatar

**Grupo:** Avatar · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Avatar representa uma pessoa ou equipe com foto de perfil, iniciais ou um ícone padrão. Use-o em cabeçalhos de comentários, listas de contatos, mensagens de chat, cards de usuário e em qualquer lugar em que seja necessário identificar alguém visualmente.

## Importação

```tsx
import {Avatar} from '@pharos-ds/core/Avatar';
```

## Exemplos

### Área interativa

```tsx
import {Avatar} from '@pharos-ds/core/Avatar';

<Avatar
  name="Ami Pena"
  size="md"
 />
```

Valores explorados na demo interativa:

- `size`: `xsm` · `sm` · `md` · `lg` · `xl` (padrão `md`)

## Boas práticas

- **Faça:** Sempre passe um name para que o avatar possa exibir iniciais se a foto falhar ao carregar, e para que leitores de tela possam anunciar quem ele representa.
- **Faça:** Escolha um size que corresponda ao contexto: xsm ou sm para menções inline, md ou lg para listas e cards, xl para cabeçalhos de perfil.
- **Faça:** Adicione um status dot quando saber a disponibilidade de alguém for importante, como em chat ou visualizações de equipe.
- **Faça:** Ao envolver um Avatar no seu próprio Tooltip ou HoverCard, defina tooltip={false} para que o tooltip de nome integrado não sobreponha o seu.
- **Evite:** Use Avatar para logos, imagens de produto ou qualquer coisa que não seja uma pessoa ou equipe. Use uma imagem ou ícone em vez disso.
- **Evite:** Force um formato quadrado ou personalizado. Avatares são sempre circulares para manter consistência em todo o sistema.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `src` | `string` | não | — | URL da fonte da imagem principal. |
| `fallbackSrc` | `string` | não | — | Imagem de fallback quando a principal falha. |
| `name` | `string` | não | — | Nome do usuário para iniciais e alt text. |
| `alt` | `string` | não | — | Alt text (usa name como fallback). |
| `size` | `'xsm' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | não | `'md'` | Tamanho do avatar. Use um tamanho nomeado ('xsm' 20px, 'sm' 24px, 'md' 36px, 'lg' 48px, 'xl' 128px) ou um valor numérico em pixels. Avatar compartilha a escala abreviada do Icon, mas seus níveis são maiores porque avatares se alinham a mídia em vez de glifos. |
| `status` | `ReactNode` | não | — | Conteúdo no canto para indicadores de status. Uma string `label` no elemento (como em AvatarStatusDot) é composta no nome acessível do avatar (ex.: "Jane Doe, Online") para que leitores de tela anunciem o status. |
| `tooltip` | `string \| boolean` | não | `true` | Tooltip exibido no hover e no foco via teclado. Omitido ou true exibe o name do avatar; uma string exibe esse texto; false não exibe tooltip. Não é desativado automaticamente quando envolvido no seu próprio Tooltip/HoverCard. Defina tooltip={false} se você fornecer seu próprio overlay. Nenhum tooltip é exibido quando tooltip é true/omitido e não há name. |
| `href` | `string` | não | — | Quando definido, o avatar renderiza como um link interativo (`<a>` ou um componente de link personalizado) apontando para cá. Segue a mesma regra de troca de elemento do Button. Requer um nome acessível significativo via `alt` ou `name`. Dentro de um AvatarGroup, avatares interativos compartilham um único Tab stop e são alcançados com as setas. |
| `as` | `ElementType` | não | — | Componente de link personalizado usado quando `href` está definido (ex.: Next.js `Link`). Substitui o padrão do LinkProvider no nível do provider. Aplica-se apenas com `href`. |
| `target` | `string` | não | — | Atributo target do link. Aplica-se apenas com `href`. |
| `rel` | `string` | não | — | Atributo rel do link. Aplica-se apenas com `href`. |
| `onClick` | `(e: MouseEvent) => void` | não | — | Handler de clique. Quando definido sem `href`, o avatar renderiza como um `<button type="button">` focável. Requer um nome acessível significativo via `alt` ou `name`. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Avatar` · Docs atualizadas: `npx @pharos-ds/cli component Avatar`
