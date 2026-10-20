---
title: "Estilização"
description: "className, CSS variables e Tailwind opcional."
source: /docs/estilizacao
---

# Estilização

Pharos é estilizado com StyleX no código-fonte, mas isso é invisível para quem consome o pacote publicado. No seu app, use CSS/JSX normalmente.

## className

Quase todos os componentes aceitam `className` para overrides:

```tsx
<Button label="Continuar" className="meu-botao" />
```

```css
.meu-botao {
  min-width: 200px;
}
```

## Tokens

Prefira tokens em vez de valores mágicos:

```css
.card {
  gap: var(--spacing-4);
  color: var(--color-text-primary);
  background: var(--color-background-body);
  border-radius: var(--radius-element);
}
```

## Tailwind

Opcional. Importe o bridge de tema:

```css
@import "@pharos-ds/core/tailwind-theme.css";
```

Depois use utilitários alinhados aos tokens Pharos. Veja [Tokens](./tokens.md).

## Sem lock-in

Você pode misturar Pharos com CSS Modules, plain CSS ou outra lib de utilitários. O design system não exige um pipeline de estilo específico no app consumidor.
