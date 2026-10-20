---
title: "Banner"
group: "Misc"
category: "Feedback & Status"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Banner"
source: /componentes/Banner
---

# Banner

**Grupo:** Misc · **Categoria:** Feedback & Status · **Pacote:** `@pharos-ds/core`

Banner exibe uma mensagem persistente no topo de uma página ou seção. Use-o para erros de formulário, atualizações do sistema, avisos de manutenção ou confirmações de sucesso que o usuário precisa ver até agir sobre elas.

## Importação

```tsx
import {Banner} from '@pharos-ds/core/Banner';
```

## Exemplos

### Área interativa

```tsx
import {Banner} from '@pharos-ds/core/Banner';

<Banner
  title="Atualização do sistema"
  description="Uma nova versão está disponível."
  status="info"
  container="card"
  isDismissable={false}
 />
```

Valores explorados na demo interativa:

- `status`: `info` · `warning` · `error` · `success` (padrão `info`)
- `container`: `card` · `section` (padrão `card`)
- `isDismissable`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Escolha um status que corresponda à mensagem: info para atualizações, warning para cautela, error para problemas, success para confirmações.
- **Faça:** Use o container card dentro do conteúdo da página e o container section para mensagens full-width que ocupam a página inteira.
- **Faça:** Torne banners info e success dismissable. Mantenha banners error visíveis até o usuário corrigir o problema.
- **Faça:** Mantenha títulos curtos e escaneáveis: "Pagamento falhou" em vez de "Houve um problema ao processar seu pagamento mais recente."
- **Evite:** Use Banner para mensagens de curta duração que desaparecem sozinhas; use Toast em vez disso.
- **Evite:** Empilhe múltiplos banners com o mesmo status; combine mensagens relacionadas em um único banner.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `status` | `'info' \| 'warning' \| 'error' \| 'success'` | sim | — | Tipo de status que controla ícone e cor. |
| `title` | `ReactNode` | sim | — | Texto do título ou ReactNode exibido no header. |
| `description` | `ReactNode` | não | — | Texto de descrição renderizado abaixo do título no header. |
| `icon` | `ReactNode` | não | — | Substitui o ícone de status padrão. |
| `isDismissable` | `boolean` | não | `false` | Se o banner pode ser dispensado pelo usuário. |
| `onDismiss` | `() => void` | não | — | Chamado quando o botão de dispensar é clicado; o banner se oculta independentemente de este callback ser fornecido. |
| `endContent` | `ReactNode` | não | — | Conteúdo de ação renderizado na área do header, alinhado ao final. Tipicamente um botão ou link. |
| `container` | `'card' \| 'section'` | não | `'card'` | Tipo de container: card tem border-radius; section é full-width sem border-radius para uso em nível de página. |
| `elevation` | `'none' \| 'low' \| 'med' \| 'high'` | não | `'none'` | Profundidade da sombra em repouso. Use para um banner flutuante que paira sobre o conteúdo; `none` é o banner inline padrão. Um banner com container `card` arredonda sua sombra para combinar. |
| `children` | `ReactNode` | não | — | Conteúdo renderizado na área de fundo do card abaixo do header colorido. |
| `defaultIsExpanded` | `boolean` | não | `false` | Se a área de conteúdo (children) começa expandida. Relevante apenas quando children são fornecidos. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Banner` · Docs atualizadas: `npx @pharos-ds/cli component Banner`
