---
title: "InternationalizationProvider"
group: "Utilities"
category: "Utility"
package: "@pharos-ds/core"
import: "@pharos-ds/core/InternationalizationProvider"
source: /componentes/InternationalizationProvider
---

# InternationalizationProvider

**Grupo:** Utilities · **Categoria:** Utility · **Pacote:** `@pharos-ds/core`

Envolve seu app para definir o locale ativo e (opcionalmente) mesclar catálogos de tradução adicionais e substituições por locale. Componentes Pharos na subárvore resolvem suas strings contra este contexto. Se nenhum provider estiver presente, os componentes usam os padrões em inglês incluídos.

## Importação

```tsx
import {InternationalizationProvider} from '@pharos-ds/core/InternationalizationProvider';
```

## Exemplos

### Área interativa

```tsx
import {InternationalizationProvider} from '@pharos-ds/core/i18n';

<InternationalizationProvider
  locale="en"
 />
```

Valores explorados na demo interativa:

- `locale`: `en` · `fr-FR` (padrão `en`)

## Boas práticas

- **Faça:** Use catálogos de locale Pharos incluídos de `@pharos-ds/core/locales/*` quando existir um para seu locale alvo.
- **Faça:** Use um catálogo local com a mesma forma apenas quando o Pharos ainda não tiver lançado aquele locale ou você estiver testando traduções em andamento.
- **Faça:** Use tags BCP 47 reais como `fr`, `pt-BR` ou `ar`; locales regionais fazem fallback para o idioma base antes do inglês.
- **Evite:** Faça cast de mapas de catálogo personalizados para `any`; o pacote i18n exporta `MessagesByLocale` e `Catalog` para tipagem de catálogo local.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `locale` | `string` | sim | — | Tag de idioma BCP 47 para o locale ativo (ex.: "en", "pt", "pt-BR", "zh-Hans"). Tags regionais fazem fallback para o idioma base e depois para o catálogo "en" incluído. |
| `messages` | `MessagesByLocale` | não | — | Mapa opcional de tag BCP 47 para catálogo de tradução. Importe catálogos incluídos de `@pharos-ds/core/locales/*`; o catálogo "en" incluído está sempre disponível e não precisa ser listado aqui. |
| `overrides` | `Overrides` | não | — | Substituições esparsas de chaves por locale aplicadas sobre os padrões incluídos. Overrides são indexados por locale para que uma troca de locale em runtime aplique o conjunto correto. |
| `children` | `ReactNode` | sim | — | Conteúdo a renderizar com o provider de internacionalização. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/InternationalizationProvider` · Docs atualizadas: `npx @pharos-ds/cli component InternationalizationProvider`
