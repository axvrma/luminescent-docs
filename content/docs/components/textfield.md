---
title: "TextField"
description: "A beautifully styled text input with focus animations."
---

The `TextField` component provides a glowing focus state and seamless dark-mode integration.

## Light Glow

<Preview>
  <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
    <TextField placeholder="Enter your email address..." glowVariant="light" />
  </div>
</Preview>

## Peach Glow

<Preview>
  <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
    <TextField placeholder="Enter your email address..." glowVariant="peach" />
  </div>
</Preview>

## Comet Glow

<Preview>
  <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
    <TextField placeholder="Search the cosmos..." glowVariant="comet" />
  </div>
</Preview>

## Usage

```tsx
import { TextField } from 'luminescent';

export default function App() {
  return (
    <TextField 
      type="password" 
      placeholder="Password" 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | | The placeholder text. |
| `type` | `string` | `'text'` | The input type (e.g., text, email, password). |
| `className` | `string` | `undefined` | Additional CSS classes. |
| `...props` | `InputHTMLAttributes` | | Standard HTML input attributes. |
