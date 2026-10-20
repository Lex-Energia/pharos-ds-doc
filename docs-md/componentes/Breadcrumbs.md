---
title: "Breadcrumbs"
group: "Breadcrumbs"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Breadcrumbs"
source: /componentes/Breadcrumbs
---

# Breadcrumbs

**Grupo:** Breadcrumbs · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

Breadcrumbs exibem uma trilha de links da raiz até a página atual. Use-os no topo de páginas de detalhe, painéis de configurações ou em qualquer lugar em que o usuário precise ver onde está e navegar de volta.

## Importação

```tsx
import {Breadcrumbs} from '@pharos-ds/core/Breadcrumbs';
```

## Exemplos

### Área interativa

```tsx
import {Breadcrumbs, BreadcrumbItem} from '@pharos-ds/core/Breadcrumbs';

<Breadcrumbs
  variant="default"
 />
```

Valores explorados na demo interativa:

- `variant`: `default` · `supporting` (padrão `default`)

## Boas práticas

- **Faça:** Posicione breadcrumbs acima do título da página para que o usuário veja sua localização antes de ler o conteúdo.
- **Faça:** Mantenha rótulos curtos e alinhados aos títulos das páginas que vinculam: "Configurações" em vez de "Página de Configurações do Aplicativo".
- **Faça:** Use a variante supporting em UIs densas como painéis admin ou sidebars, onde o breadcrumb deve ser sutil.
- **Faça:** Faça o último item ser texto simples, não um link; ele representa a página atual. O componente faz isso automaticamente quando você define isCurrent.
- **Evite:** Use breadcrumbs como navegação principal. Eles complementam uma sidebar ou top nav, não a substituem.
- **Evite:** Exiba breadcrumbs em páginas de nível superior sem pai; eles adicionam ruído sem ajudar o usuário.
- **Evite:** Deixe a trilha crescer além de 5 níveis. Se precisar de mais, considere simplificar a hierarquia de páginas.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Elementos BreadcrumbItem a renderizar dentro da trilha de breadcrumbs. |
| `separator` | `ReactNode` | não | `'/'` | Separador renderizado entre itens de breadcrumb. |
| `variant` | `'default' \| 'supporting'` | não | `'default'` | Variante visual: supporting é menor com estilo de texto secondary. |
| `label` | `string` | não | `'Breadcrumb'` | Rótulo acessível para o landmark nav (aria-label). |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Breadcrumbs` · Docs atualizadas: `npx @pharos-ds/cli component Breadcrumbs`
