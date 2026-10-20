---
title: "Badge"
group: "Misc"
category: "Feedback & Status"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Badge"
source: /componentes/Badge
---

# Badge

**Grupo:** Misc · **Categoria:** Feedback & Status · **Pacote:** `@pharos-ds/core`

Badge destaca um status ou categoria de relance. Use-o com moderação: apenas quando um valor representa um estado distinto (Active, Failed) ou uma tag de agrupamento (Engineering, Design). A maioria dos metadados (datas, durações, contagens, descrições) deve ser texto de descrição simples, não badges.

## Importação

```tsx
import {Badge} from '@pharos-ds/core/Badge';
```

## Exemplos

### Área interativa

```tsx
import {Badge} from '@pharos-ds/core/Badge';

<Badge
  label="Etiqueta"
  variant="info"
 />
```

Valores explorados na demo interativa:

- `variant`: `neutral` · `info` · `success` · `warning` · `error` · `blue` · `cyan` · `green` · `orange` · `pink` · `purple` · `red` · `teal` · `yellow` (padrão `info`)

## Boas práticas

- **Faça:** Cada badge de status chama atenção. Use badges apenas em estados em que o usuário precisa notar ou agir: erros, avisos, itens que exigem acompanhamento. Se nenhuma ação for necessária, texto simples é suficiente.
- **Faça:** Use as variantes success, warning e error apenas para status de sistema que exigem atenção: "Failed", "Degraded", "Action Required". Elas têm fundos sólidos em negrito projetados para se destacar.
- **Faça:** Use variantes de cor (blue, purple, teal, etc.) para tags de categoria que agrupam ou classificam itens: nomes de equipe, tipos de conteúdo, níveis de prioridade.
- **Faça:** Mantenha labels com uma ou duas palavras. Se precisar de mais detalhes, coloque-os no texto ao redor em vez de no badge.
- **Faça:** Adicione um ícone quando ele ajudar a identificar o tipo de badge rapidamente, mas sempre inclua um label de texto junto.
- **Evite:** Aplique um badge "success" a todo item saudável/ativo/normal. Se todas as linhas mostrarem badges verdes "Active", nenhum se destaca; o badge adiciona ruído, não informação. Mostre apenas os estados que exigem atenção do usuário (erros, avisos, ações pendentes).
- **Evite:** Use badges para metadados. Durações ("6h window"), contagens ("12 trigger types"), datas e descrições não são statuses ou categorias; use texto de descrição (Text com type="supporting") em vez disso.
- **Evite:** Use variantes de status semântico (success, warning, error, info) para categorias ou conteúdo informativo. Elas são visualmente chamativas e devem indicar apenas estado de sistema.
- **Evite:** Repita o mesmo badge em cada linha de uma tabela ou lista. Se o mesmo valor aparece na maioria das linhas, não está agregando informação; use texto simples para estados comuns e reserve badges para os excepcionais.
- **Evite:** Torne badges clicáveis; eles são indicadores somente leitura. Use um button ou link se o usuário precisar agir.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `variant` | `'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'blue' \| 'cyan' \| 'green' \| 'orange' \| 'pink' \| 'purple' \| 'red' \| 'teal' \| 'yellow'` | não | `'neutral'` | Variante de estilo visual. Variantes semânticas (neutral, info, success, warning, error) usam fundos sólidos. Variantes de cor não semânticas usam fundos tingidos com texto colorido para categorização e tagging. |
| `label` | `ReactNode` | não | — | Conteúdo de texto do badge. |
| `icon` | `ReactNode` | não | — | Ícone opcional à esquerda. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Badge` · Docs atualizadas: `npx @pharos-ds/cli component Badge`
