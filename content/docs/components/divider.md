---
title: "Divider"
description: "A subtle, elegant divider component to separate content."
---

The `Divider` component provides a visually pleasing way to separate sections, featuring a soft gradient fade out at the edges.

## Interactive Preview

<Preview>
  <div style={{ width: '100%', padding: '2rem' }}>
    <Divider />
  </div>
</Preview>

## Usage

```tsx
import { Divider } from 'luminescent';

export default function App() {
  return (
    <div>
      <p>Section 1</p>
      <Divider />
      <p>Section 2</p>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes. |
