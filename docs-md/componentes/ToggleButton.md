---
title: "ToggleButton"
group: "Button"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ToggleButton"
source: /componentes/ToggleButton
---

# ToggleButton

**Grupo:** Button · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

ToggleButton alterna entre estados selecionado e não selecionado para representar uma escolha persistente ligado/desligado. Use standalone para ações binárias como bold, mute ou favorite, ou dentro de ToggleButtonGroup para controles de toolbar single-select ou multi-select.

## Importação

```tsx
import {ToggleButton} from '@pharos-ds/core/ToggleButton';
```

## Exemplos

### Área interativa

```tsx
import {ToggleButton} from '@pharos-ds/core/ToggleButton';

<ToggleButton
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use um ícone preenchido ou colorido para o estado pressionado, para que usuários vejam o estado atual de relance: estrela outline vs estrela sólida, por exemplo.
- **Faça:** Mantenha o rótulo idêntico entre estados pressionado e não pressionado. Deixe o tratamento visual (ícone, weight, background) comunicar a mudança.
- **Faça:** Envolva toggles relacionados em um ToggleButtonGroup com rótulo acessível, para que leitores de tela os anunciem como um conjunto conectado.
- **Evite:** Não use um ToggleButton para ações únicas como "Submit" ou "Delete"; esses são Buttons regulares, não toggles.
- **Evite:** Não misture ToggleButtons com Buttons regulares no mesmo grupo; use apenas ToggleButtons em um ToggleButtonGroup.
- **Evite:** Não use um ToggleButton para configurações ligado/desligado que persistem entre sessões; use um Switch, que comunica melhor semântica de "configuração".

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo acessível do botão. Usado como texto visível, ou como aria-label para botões somente com ícone. |
| `isPressed` | `boolean` | não | — | Se o botão está atualmente pressionado. Ignorado quando dentro de um grupo. |
| `onPressedChange` | `(isPressed: boolean, event: MouseEvent) => void` | não | — | Chamado quando o estado pressionado deve mudar. Recebe o próximo estado e o evento de clique; chame event.preventDefault() para pular pressedChangeAction. Ignorado quando dentro de um grupo. |
| `pressedChangeAction` | `(isPressed: boolean) => void \| Promise<void>` | não | — | Handler de ação para toggles respaldados por API ou navegação, executado em uma transition. Mostra estado pressionado otimista imediatamente e spinner enquanto pendente; o botão permanece interruptible por re-cliques. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do botão. Padrão: size do grupo quando dentro de um grupo. |
| `isDisabled` | `boolean` | não | `false` | Se o botão está desabilitado. |
| `isLoading` | `boolean` | não | `false` | Se o botão mostra um spinner de loading. |
| `icon` | `ReactNode` | não | — | Elemento de ícone. Quando fornecido sem children, o botão vira somente com ícone com tooltip de label. |
| `isIconOnly` | `boolean` | não | `false` | Quando true, renderiza como botão quadrado somente com ícone, com `label` como aria-label e tooltip automático do label. |
| `pressedIcon` | `ReactNode` | não | — | Ícone exibido quando pressionado. Usa icon como fallback se não fornecido. |
| `children` | `ReactNode` | não | — | Conteúdo visível. Se omitido com icon, o botão vira somente com ícone. |
| `tooltip` | `string` | não | — | Texto de tooltip exibido no hover. |
| `value` | `string` | não | — | Identificador de valor quando usado dentro de ToggleButtonGroup. Obrigatório em grupos. |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ToggleButton` · Docs atualizadas: `npx @pharos-ds/cli component ToggleButton`
