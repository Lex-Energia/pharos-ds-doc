---
title: "ProgressBar"
group: "Misc"
category: "Feedback & Status"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ProgressBar"
source: /componentes/ProgressBar
---

# ProgressBar

**Grupo:** Misc · **Categoria:** Feedback & Status · **Pacote:** `@pharos-ds/core`

Barra horizontal que mostra o progresso de conclusão de uma tarefa. Use para operações cuja duração é conhecida ou como indicador animado quando o progresso não pode ser calculado. Suporta variants de cor semânticos, rótulos de valor e formatação personalizada.

## Importação

```tsx
import {ProgressBar} from '@pharos-ds/core/ProgressBar';
```

## Exemplos

### Área interativa

```tsx
import {ProgressBar} from '@pharos-ds/core/ProgressBar';

<ProgressBar
  label="Progresso"
  value={68}
  variant="accent"
  isIndeterminate={false}
  hasValueLabel
 />
```

Valores explorados na demo interativa:

- `variant`: `accent` · `success` · `warning` · `neutral` · `error` (padrão `accent`)
- `isIndeterminate`: boolean (padrão `false`)
- `hasValueLabel`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Use uma barra determinada quando a quantidade total de trabalho for conhecida, e indeterminate quando não for.
- **Faça:** Escolha um variant de cor que combine com o contexto: accent para progresso geral, success para conclusão, warning ou error para alertas.
- **Faça:** Sempre forneça um label, mesmo oculto; leitores de tela precisam dele para anunciar o que está carregando.
- **Evite:** Coloque ícones ou rótulos dentro da barra; componha-os ao lado usando componentes de layout.
- **Evite:** Use uma progress bar para ações instantâneas; ela é feita para operações que levam tempo perceptível.
- **Evite:** Use várias progress bars empilhadas para a mesma operação; use uma barra com value label em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | rótulo acessível |
| `value` | `number` | não | `0` | Valor atual (ignorado quando indeterminate). |
| `max` | `number` | não | `100` | Valor máximo. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo (permanece acessível). |
| `hasValueLabel` | `boolean` | não | `false` | Exibe texto de valor formatado (ignorado quando indeterminate). |
| `formatValueLabel` | `(value: number, max: number) => string` | não | — | Formatador personalizado de rótulo de valor; padrão é uma string de porcentagem. |
| `variant` | `'accent' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | não | `'accent'` | Variant de cor semântico. |
| `isIndeterminate` | `boolean` | não | `false` | Indicador de carregamento animado para progresso desconhecido. |
| `isDisabled` | `boolean` | não | `false` | Estado visualmente desabilitado: esmaece o preenchimento e o texto. Use para operações canceladas ou inativas. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ProgressBar` · Docs atualizadas: `npx @pharos-ds/cli component ProgressBar`
