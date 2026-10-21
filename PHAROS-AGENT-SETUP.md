# Pharos Design System — instruções para o agente de front-end

Você vai configurar e usar o **Pharos**, o design system da Alexandria, neste projeto. Siga este documento do início ao fim. Ele vale para projetos React 19 (Next.js App Router, Vite ou similar).

## 1. O que é

- **`@pharos-ds/core`**: 154 componentes React acessíveis + CSS pré-compilado. Não exige plugin de build.
- **`@pharos-ds/theme-pharos`**: o **tema oficial e padrão**, com a identidade Alexandria (Figtree, azul `#034694` como cor primária, roxo `#7C51A1`, laranja `#F26641` e amarelos como destaque, chumbo `#383838`, dark mode, ícones Lucide, logo e símbolo da marca).
- **`@pharos-ds/cli`**: fonte de verdade para props, exemplos, templates e docs. Use-a em vez de adivinhar APIs.

Regra número um: **o tema é sempre `@pharos-ds/theme-pharos`**. Nunca instale nem use `@pharos-ds/theme-neutral`, `theme-butter`, `theme-chocolate`, `theme-gothic`, `theme-matcha`, `theme-stone` ou `theme-y2k`. São temas de exemplo da CLI. Versões da CLI anteriores à 1.0.3 sugeriam `theme-neutral` no `init`; se vir isso, ignore e atualize a CLI.

## 2. Instalação

```bash
pnpm add @pharos-ds/core@^1.0.9 @pharos-ds/theme-pharos@^1.0.9
pnpm add -D @pharos-ds/cli@^1.0.9
```

Use sempre o pacote com escopo `@pharos-ds/cli`. O pacote bare `pharos` no npm é outro projeto.

Adicione o script no `package.json`:

```json
{
  "scripts": {
    "pharos": "node node_modules/@pharos-ds/cli/bin/pharos.mjs"
  }
}
```

## 3. CSS global (ordem obrigatória)

No CSS global do app (`src/app/globals.css` no Next.js, `src/index.css` no Vite):

```css
@import "@pharos-ds/core/reset.css";
@import "@pharos-ds/core/pharos.css";
@import "@pharos-ds/theme-pharos/fonts.css";
@import "@pharos-ds/theme-pharos/theme.css";
```

A ordem é reset → base → fonte → tema. Sem os imports de reset, base e tema os componentes renderizam sem estilo. O `fonts.css` carrega a Figtree (400, 500, 600 e 700); sem ele a página cai na fonte do sistema. Em Next.js você pode usar o `next/font` no lugar do `fonts.css`: carregue a Figtree e aponte `--font-family-body` e `--font-family-heading` para ela.

## 4. Provider do tema

Next.js App Router, em `src/app/providers.tsx`:

```tsx
'use client';

import Link from 'next/link';
import {Theme} from '@pharos-ds/core/theme';
import {LinkProvider} from '@pharos-ds/core/Link';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={pharosTheme} mode="system">
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
```

E em `src/app/layout.tsx`:

```tsx
import './globals.css';
import {Providers} from './providers';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

Vite ou React puro: mesma coisa, sem o `LinkProvider`, envolvendo o `<App />` no `main.tsx`.

Use sempre o import `/built` (tema pré-compilado). O import sem `/built` injeta estilos em runtime e é mais lento.

Se o bundler reclamar de módulos ESM do tema no Next.js, adicione em `next.config.ts`:

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@pharos-ds/core', '@pharos-ds/theme-pharos'],
};

export default nextConfig;
```

Dark mode: o prop `mode` de `<Theme>` aceita `"light" | "dark" | "system"`. Para SSR sem flash, coloque `data-theme="light"` ou `"dark"` no `<html>` quando o usuário tiver uma escolha salva.

## 5. Gere o cheat sheet dos agentes

```bash
pnpm pharos -- init
```

Isso escreve um bloco em `AGENTS.md` e `CLAUDE.md` com regras, workflow e comandos. Leia esse bloco antes de escrever UI. A partir da CLI 1.0.3 o bloco SETUP já inclui o `@pharos-ds/theme-pharos`. Se não incluir, a CLI está desatualizada: atualize-a e mantenha as seções 3 e 4 deste documento como fonte de verdade.

Confira a instalação:

```bash
pnpm pharos -- doctor
```

Todos os checks devem passar, incluindo "Theme packages" apontando para `@pharos-ds/theme-pharos`.

## 6. Workflow para construir telas

Nunca invente props ou componentes. Descubra antes de escrever:

```bash
# 1. Comece aqui: kit para o que você vai construir (template + blocos + componentes)
pnpm pharos -- build "dashboard de faturas com filtros e tabela"

# 2. Templates de página prontos (43). Inspecione ou copie um skeleton
pnpm pharos -- template --list
pnpm pharos -- template dashboard
pnpm pharos -- template dashboard --skeleton

# 3. Props, exemplos e boas práticas de cada componente que for usar
pnpm pharos -- component --list
pnpm pharos -- component Button
pnpm pharos -- component Table

# 4. Guias de tokens, layout, tema
pnpm pharos -- docs tokens
pnpm pharos -- docs layout
pnpm pharos -- docs theme
```

Importe cada componente pelo caminho próprio:

```tsx
import {Button} from '@pharos-ds/core/Button';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Text, Heading} from '@pharos-ds/core/Text';
import {TextInput} from '@pharos-ds/core/TextInput';
import {Badge} from '@pharos-ds/core/Badge';
```

## 7. Regras de código

- **Sem `<div>` para layout.** Use `AppShell` (página inteira), `Layout` + `LayoutPanel`, `VStack`, `HStack`, `Grid`, `Section`, `Center`. Navegação lateral é `SideNav`; topo é `TopNav`.
- **Frame primeiro.** Escolha o shell e as regiões antes do conteúdo.
- **Dados densos são linhas**, não cards: `Table`, `List`/`Item`, de borda a borda. `Card` só para widgets de dashboard, galerias e grupos de configurações.
- **Status**: `StatusDot` ou `Token`. `Badge` só para contagens e estados enumerados, nunca decoração.
- **Um único `Button variant="primary"` por tela.** O resto é `secondary` ou `ghost`. `destructive` sempre com confirmação (`AlertDialog`).
- **Botão só com ícone** é `IconButton`, de `@pharos-ds/core/IconButton`, sempre com `label`.
- **Texto e títulos** via `Text` e `Heading`, nunca `<p>`/`<h1>` soltos com CSS próprio.
- **Sem hex, px ou cores soltas.** Customização: primeiro props do componente; depois `className`/`style` só com tokens: `var(--color-text-primary)`, `var(--spacing-4)`, `var(--radius-element)`. Nunca sobrescreva `--color-*` no `:root`.
- **Cores semânticas** (`success`, `warning`, `error`) para feedback; cores categóricas (`blue`, `purple`, `teal`...) para categorias, não para estado.
- **Marca.** Logo e símbolo vêm de `AlexandriaLogo` (`@pharos-ds/theme-pharos/logo`, módulo cliente); use `kind="symbol"` onde o logotipo não cabe, como na sidebar recolhida. Não redesenhe nem recolora a logo. O degradê (`brandGradient`, de `@pharos-ds/theme-pharos/brand`) é só decorativo, como em login e estados vazios, nunca um filtro de cor.
- **Links** com `Link` de `@pharos-ds/core/Link`, que usa o `LinkProvider` do framework.
- **Tailwind é opcional.** Se o projeto usa, importe `@pharos-ds/core/tailwind-theme.css` depois do tema e use utilitários ligados aos tokens (`bg-surface`, `text-primary`). Nada de valores arbitrários como `bg-[#fff]`.
- Não misture outra biblioteca de componentes (MUI, Chakra, shadcn) com o Pharos.

Revisão final obrigatória: releia o código gerado e troque qualquer `div`/`span` de layout, CSS importado, `style={{}}` com valor cru ou hex por um componente ou token.

## 8. Exemplo mínimo de página

```tsx
import {AppShell} from '@pharos-ds/core/AppShell';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Heading, Text} from '@pharos-ds/core/Text';
import {Button} from '@pharos-ds/core/Button';
import {TextInput} from '@pharos-ds/core/TextInput';

export default function Page() {
  return (
    <AppShell>
      <VStack gap={6}>
        <VStack gap={2}>
          <Heading level={1}>Faturas</Heading>
          <Text type="body" color="secondary">
            Acompanhe as faturas da sua unidade consumidora.
          </Text>
        </VStack>
        <HStack gap={3} vAlign="end" wrap="wrap">
          <TextInput label="Buscar" placeholder="Número da fatura" />
          <Button label="Filtrar" variant="primary" />
          <Button label="Limpar" variant="ghost" />
        </HStack>
      </VStack>
    </AppShell>
  );
}
```

Antes de usar `AppShell`, `TextInput` ou qualquer outro, rode `pnpm pharos -- component <Nome>` e use só as props documentadas.

## 9. Checklist de entrega

- [ ] `@pharos-ds/core`, `@pharos-ds/theme-pharos` (>= 1.0.9) e `@pharos-ds/cli` instalados.
- [ ] CSS global com reset → pharos → fonts → theme-pharos, nessa ordem (ou `next/font` no lugar do `fonts.css`).
- [ ] `<Theme theme={pharosTheme}>` (import `/built`) envolvendo o app.
- [ ] `pnpm pharos -- init` rodado e `AGENTS.md`/`CLAUDE.md` lidos.
- [ ] `pnpm pharos -- doctor` sem falhas.
- [ ] Nenhum outro `@pharos-ds/theme-*` instalado.
- [ ] Nenhum `div` de layout, hex ou px solto no código gerado.

## 10. Referência completa

A documentação inteira em Markdown, para carregar no contexto do agente, está no repositório `Lex-Energia/pharos-ds-doc`, pasta `docs-md/`:

- `docs-md/README.md`: índice e instruções para agentes.
- `docs-md/componentes/<Nome>.md`: um arquivo por componente, com props, exemplos e boas práticas.
- `docs-md/tema-pharos.md`: todos os tokens do tema Alexandria (claro/escuro), tipografia, ícones.
- `docs-md/guias/`: instalação, Next.js, CLI, temas, estilização, tokens.
- `docs-md/templates/README.md`: os 43 templates de página.

Código-fonte do design system: https://github.com/Lex-Energia/alexandria-ds
