---
title: "Citation"
group: "Citation"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Citation"
source: /componentes/Citation
---

# Citation

**Grupo:** Citation · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Citations exibem referências inline a fontes externas. Use-as para atribuir informações em respostas geradas por IA, artigos ou em qualquer lugar em que proveniência e links de fonte sejam necessários.

## Importação

```tsx
import {Citation} from '@pharos-ds/core/Citation';
```

## Exemplos

### Área interativa

```tsx
import {Citation} from '@pharos-ds/core/Citation';

<Citation
  number={1}
  variant="label"
 />
```

Valores explorados na demo interativa:

- `variant`: `label` · `number` (padrão `label`)

## Boas práticas

- **Faça:** Use a variante label quando o título da fonte adiciona contexto significativo para o leitor.
- **Faça:** Use a variante number para referências inline compactas no corpo do texto, como notas de rodapé.
- **Evite:** Misture variantes label e number no mesmo parágrafo. Escolha um estilo por contexto para consistência visual.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `source` | `CitationSource` | sim | — | O objeto de fonte da citation contendo title, url, um src de imagem opcional e um node de ícone opcional. |
| `number` | `number` | sim | — | O índice de exibição desta citation. |
| `variant` | `'label' \| 'number'` | não | `'label'` | Estilo de exibição: um chip label mostrando o título da fonte ou um badge numerado compacto. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Citation` · Docs atualizadas: `npx @pharos-ds/cli component Citation`
