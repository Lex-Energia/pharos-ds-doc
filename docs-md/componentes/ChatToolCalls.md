---
title: "ChatToolCalls"
group: "Chat"
category: "Chat"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatToolCalls"
source: /componentes/ChatToolCalls
---

# ChatToolCalls

**Grupo:** Chat · **Categoria:** Chat · **Pacote:** `@pharos-ds/core`

ChatToolCalls exibe invocações de tool ou function call de uma resposta LLM. Passe um array de calls e o componente cuida do resto: uma única call renderiza inline, enquanto múltiplas calls colapsam em um resumo com a call mais recente visível na superfície. Use-o em qualquer lugar em que um agente de IA mostre quais ações executou.

## Importação

```tsx
import {ChatToolCalls} from '@pharos-ds/core/ChatToolCalls';
```

## Exemplos

### Área interativa

```tsx
import {ChatToolCalls} from '@pharos-ds/core/Chat';

<ChatToolCalls
  status="complete"
  defaultIsExpanded
 />
```

Valores explorados na demo interativa:

- `status`: `pending` · `running` · `complete` · `error` (padrão `complete`)
- `defaultIsExpanded`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Inclua uma string target em cada call para que o usuário veja sobre o que a tool agiu: um caminho de arquivo, um comando shell ou uma query de busca.
- **Faça:** Exiba uma duration em calls concluídas para que usuários avaliem quais tools são lentas e entendam por que uma resposta demorou.
- **Faça:** Forneça resultDetail com um code block para calls que produzem output (diffs para edições, output de terminal para comandos shell) para que usuários inspecionem resultados inline.
- **Faça:** Defina uma key única em cada item de call durante streaming para que o React possa animar adições sem remontar linhas concluídas.
- **Evite:** Não omita o campo status. Sem ele a call assume complete por padrão, o que é enganoso para calls ainda em execução ou que falharam.
- **Evite:** Não exiba tool calls fora do contexto de uma mensagem de chat; elas foram projetadas para ficar dentro de uma mensagem de assistant, não como UI standalone.
- **Evite:** Não use wrappers customizados em torno de calls individuais; o componente trata layout single vs. grouped automaticamente com base no tamanho do array.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `calls` | `ChatToolCallItem[]` | sim | — | Array de dados de tool call. Cada item tem name, status, target, duration, node, additions, deletions, stats, errorMessage, resultDetail, key e data. status é um de 'pending', 'running', 'complete' ou 'error' (padrão 'complete'). |
| `label` | `string` | não | — | Label de resumo customizado para grupos. Gerado automaticamente a partir da contagem se omitido. |
| `isExpanded` | `boolean` | não | — | Estado expandido controlado para o grupo. |
| `defaultIsExpanded` | `boolean` | não | `false` | Estado expandido padrão quando não controlado. |
| `onExpandedChange` | `(isExpanded: boolean) => void` | não | — | Callback disparado quando o estado expandido muda. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatToolCalls` · Docs atualizadas: `npx @pharos-ds/cli component ChatToolCalls`
