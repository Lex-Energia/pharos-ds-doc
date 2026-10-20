---
title: "Outline"
group: "Outline"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Outline"
source: /componentes/Outline
---

# Outline

**Grupo:** Outline · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

Uma sidebar de sumário para páginas de documentação, centros de ajuda, wikis e páginas longas de configurações. Use para navegação dentro de uma única página, não para rotas de app. Possui uma trilha de indicador deslizante que anima até o heading ativo. A lista é um único tab stop: setas movem entre headings, Home/End saltam para os extremos, e Enter/Space ativam.

## Importação

```tsx
import {Outline} from '@pharos-ds/core/Outline';
```

## Exemplos

### Área interativa

```tsx
import {Outline} from '@pharos-ds/core/Outline';

<Outline
  density="default"
 />
```

Valores explorados na demo interativa:

- `density`: `default` · `compact` (padrão `default`)

## Boas práticas

- **Faça:** Passe uma lista plana ordenada de headings e deixe level controlar a indentação.
- **Faça:** Use activeId quando lógica de scroll customizada controla a seção ativa.
- **Faça:** Use density="compact" em sidebars densas onde o espaço vertical é apertado.
- **Faça:** Use useOutlineFromMarkdown ou useOutlineFromDOM quando headings são gerados a partir do conteúdo.
- **Faça:** Passe scrollContainerRef quando o conteúdo rola em um split pane, modal ou panel em vez do viewport.
- **Faça:** Defina offset para a altura de um header fixo que sobrepõe o conteúdo, para que headings parem abaixo dele em vez de por baixo.
- **Evite:** Use Outline para navegação de aplicação — use SideNav ou TopNav para rotas.
- **Evite:** Use Outline para hierarquia expansível — use TreeList quando nós precisam expandir e colapsar.
- **Evite:** Confie em onNavigateEnd para significar "chegou" — ele também dispara quando o usuário interrompe o scroll.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Outline`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Outline` · Docs atualizadas: `npx @pharos-ds/cli component Outline`
