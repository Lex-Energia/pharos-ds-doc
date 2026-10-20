---
title: "NavIcon"
group: "Navigation"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/NavIcon"
source: /componentes/NavIcon
---

# NavIcon

**Grupo:** Navigation · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

NavIcon é um contêiner circular de ícone com fundo em cor de destaque. Use em cabeçalhos de navegação como TopNavHeading e PageNavHeader para identificar visualmente uma seção ou aplicação.

## Importação

```tsx
import {NavIcon} from '@pharos-ds/core/NavIcon';
```

## Exemplos

### Área interativa

```tsx
import {NavIcon} from '@pharos-ds/core/NavIcon';

<NavIcon />
```

## Boas práticas

- **Faça:** Use em cabeçalhos de navegação para fornecer uma âncora visual reconhecível da seção.
- **Faça:** Passe um Icon ou componente de ícone de tamanho similar para garantir proporções adequadas.
- **Evite:** Use NavIcon para fins interativos; é um contêiner apenas de exibição, não um botão.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `icon` | `ReactNode` | sim | — | O elemento de ícone a renderizar dentro do fundo circular. Deve ser um Icon ou componente de ícone similar. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/NavIcon` · Docs atualizadas: `npx @pharos-ds/cli component NavIcon`
