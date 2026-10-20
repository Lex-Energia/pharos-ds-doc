---
title: "Icon"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Icon"
source: /componentes/Icon
---

# Icon

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Ícones são pequenos símbolos visuais que representam ações, objetos ou conceitos. Melhoram a escaneabilidade e reforçam o significado junto ao texto. Suporta componentes SVG diretos e nomes semânticos de ícones que se adaptam ao tema ativo.

## Importação

```tsx
import {Icon} from '@pharos-ds/core/Icon';
```

## Exemplos

### Área interativa

```tsx
import {Icon} from '@pharos-ds/core/Icon';

<Icon
  icon="search"
  size="xsm"
  color="primary"
 />
```

Valores explorados na demo interativa:

- `icon`: `search` · `calendar` · `success` · `error` · `info` (padrão `search`)
- `size`: `xsm` · `sm` · `md` · `lg` (padrão `xsm`)
- `color`: `primary` · `secondary` · `accent` · `success` · `error` (padrão `primary`)

## Boas práticas

- **Faça:** Use nomes semânticos de ícones quando disponíveis; eles se adaptam automaticamente a mudanças de tema.
- **Faça:** Combine ícones com rótulos de texto para acessibilidade; elementos só com ícone precisam de um rótulo acessível.
- **Faça:** Para um ícone isolado com significado (sem texto adjacente), dê um nome acessível via prop `label`: define role="img" + aria-label e torna o ícone visível para leitores de tela.
- **Faça:** Use tokens de cor para cores de ícones, não valores hex fixos.
- **Faça:** Considere o contexto; ícones decorativos em componentes compactos podem distrair em vez de ajudar.
- **Evite:** Use ícones como único meio de transmitir significado; sempre forneça uma alternativa em texto.
- **Evite:** Redimensione ícones com valores de pixel arbitrários; use as props size fornecidas.
- **Evite:** Misture estilos de ícones (ex.: outline e filled) no mesmo contexto.
- **Evite:** Renderize elementos SVG brutos; sempre envolva em Icon para dimensionamento e cor consistentes.
- **Evite:** Passe uma prop `name`; Icon usa `icon` (não `name`) para especificar qual ícone renderizar.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `icon` | `IconName \| ComponentType<SVGProps>` | sim | — | Nome semântico do ícone ou componente SVG. Nomes semânticos válidos: close, chevronDown, chevronLeft, chevronRight, check, success, error, warning, info, calendar, clock, externalLink, menu, moreHorizontal, search, arrowUp, arrowDown, arrowsUpDown, funnel, eyeSlash, viewColumns, copy, checkDouble, wrench, stop, microphone. Para qualquer ícone fora desta lista, passe um componente SVG diretamente (ex.: import de lucide-react ou @heroicons/react). Nota: esta prop se chama `icon`, não `name`. |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'disabled' \| 'accent' \| 'success' \| 'error' \| 'warning' \| 'inherit'` | não | `'inherit'` | Variant de cor mapeado para tokens de cor de ícone Pharos. |
| `size` | `'xsm' \| 'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do ícone. |
| `label` | `string` | não | — | Nome acessível para um ícone ISOLADO COM SIGNIFICADO (glifo de status ou indicador só com ícone, sem texto adjacente). Defini-lo expõe o ícone a leitores de tela como role="img" com este texto como nome acessível (aria-label) e remove o aria-hidden padrão. Omita (padrão) para ícones decorativos e o ícone permanece oculto da tecnologia assistiva (aria-hidden="true"). Esta é a prop de nome acessível / alt-text para ícones: uma prop em vez de definir manualmente aria-label + role + aria-hidden. String vazia é tratada como decorativa. Não defina quando um pai interativo (Button, IconButton, link) já nomeia o controle. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização (color, size, opacity). Incorporados na própria chamada stylex.props() do ícone para compor com os estilos base de color/size. Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Icon` · Docs atualizadas: `npx @pharos-ds/cli component Icon`
