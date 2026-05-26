---
title: "FloatingMenu"
description: "A sleek, sticky or absolute positioned floating menu."
---

The `FloatingMenu` component is a glass-morphism panel designed for quick actions or navigation links that float above the content.

## Default

<Preview>
  <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FloatingMenu items={[{ id: '1', label: 'Home', href: '#' }, { id: '2', label: 'About', href: '#' }, { id: '3', label: 'Settings', href: '#' }]} />
  </div>
</Preview>

## White Glow

<Preview>
  <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FloatingMenu glowColor="white" items={[{ id: '1', label: 'Home', href: '#' }, { id: '2', label: 'Profile', href: '#' }, { id: '3', label: 'Logout', href: '#' }]} />
  </div>
</Preview>

## Top Glow

<Preview>
  <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FloatingMenu glowColor="peach" glowPosition="top" items={[{ id: '1', label: 'Projects', href: '#' }, { id: '2', label: 'Tasks', href: '#' }, { id: '3', label: 'Team', href: '#' }]} />
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
