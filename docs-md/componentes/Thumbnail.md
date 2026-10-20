---
title: "Thumbnail"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Thumbnail"
source: /componentes/Thumbnail
---

# Thumbnail

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Thumbnail exibe uma preview compacta e quadrada de um anexo de imagem. Mostra efeito shimmer durante upload, a imagem em sucesso e um ícone placeholder quando nenhuma source está definida. Use em compositores de chat, listas de upload de arquivo ou onde precisar de uma preview pequena de imagem com ações opcionais de remover e clicar.

## Importação

```tsx
import {Thumbnail} from '@pharos-ds/core/Thumbnail';
```

## Exemplos

### Área interativa

```tsx
import {Thumbnail} from '@pharos-ds/core/Thumbnail';

<Thumbnail
  isLoading={false}
  isDisabled={false}
  showRemoveOn="hover"
 />
```

Valores explorados na demo interativa:

- `isLoading`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)
- `showRemoveOn`: `always` · `hover` (padrão `hover`)

## Boas práticas

- **Faça:** Sempre forneça a prop label com o nome do arquivo, para que o thumbnail e seu botão de remover sejam acessíveis a leitores de tela e mostrem tooltip no hover.
- **Faça:** Use isLoading sem src para mostrar skeleton durante upload inicial, e isLoading com src para mostrar overlay de spinner quando uma URL de preview estiver disponível.
- **Faça:** Combine onClick com lightbox ou view de detalhes, para que usuários inspecionem a imagem completa; o thumbnail adiciona semântica de botão e overlay de hover automaticamente.
- **Evite:** Não use Thumbnail para tipos de arquivo não-imagem como PDFs ou planilhas; use um componente de anexo de arquivo com ícone apropriado.
- **Evite:** Não omita alt text quando src for fornecido; leitores de tela precisam de uma description do conteúdo da imagem, não apenas o nome do arquivo de label.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `src` | `string` | não | — | URL da source da imagem. |
| `alt` | `string` | não | — | Alt text da imagem. Quando omitido, a imagem é explicitamente decorativa (alt="", role="presentation", aria-hidden) e oculta de leitores de tela; um aviso de dev dispara se nem alt nem label estiverem definidos. |
| `label` | `string` | não | — | Rótulo acessível (ex.: nome do arquivo). Exibido como tooltip no hover. |
| `onRemove` | `(e: React.MouseEvent) => void` | não | — | Callback do botão de remover sobreposto. |
| `onClick` | `(e: React.MouseEvent) => void` | não | — | Handler de clique. Adiciona semântica de botão e overlay de hover. |
| `isLoading` | `boolean` | não | `false` | Mostra skeleton (sem src) ou overlay de upload (com src). |
| `isDisabled` | `boolean` | não | `false` | Se o thumbnail está desabilitado. |
| `showRemoveOn` | `'always' \| 'hover'` | não | `'hover'` | Quando o botão de remover é visível. `hover` (padrão) revela no hover e foco por teclado, e mantém visível em qualquer dispositivo touch-capable; `always` mostra em repouso. Aplica-se apenas quando `onRemove` está definido. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |
| `className` | `string` | não | — | Nome de classe CSS para o elemento raiz. Prefira xstyle para estilização; className é fornecido para integração com sistemas não-StyleX. |
| `style` | `CSSProperties` | não | — | Estilos inline para o elemento raiz. Prefira xstyle para estilização; estilos inline ignoram otimização StyleX. |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Thumbnail` · Docs atualizadas: `npx @pharos-ds/cli component Thumbnail`
