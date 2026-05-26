---
title: "FloatingMenu"
description: "A sleek, sticky or absolute positioned floating menu."
---

The `FloatingMenu` component is a glass-morphism panel designed for quick actions or navigation links that float above the content.

## Interactive Preview

<Preview>
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FloatingMenu items='[{"label":"Home","href":"#"},{"label":"About","href":"#"},{"label":"Settings","href":"#"}]' />
  </div>
</Preview>

## Usage

```tsx
import { FloatingMenu } from 'luminescent';

export default function App() {
  return (
    <FloatingMenu 
      items={[
        { label: 'Profile', href: '/profile' },
        { label: 'Settings', href: '/settings' }
      ]} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ label: string, href: string }[]` | `[]` | The items to display in the menu. |
| `className` | `string` | `undefined` | Additional CSS classes. |
