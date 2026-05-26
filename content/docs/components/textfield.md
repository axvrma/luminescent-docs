---
title: "TextField"
description: "A beautifully styled text input with focus animations."
---

The `TextField` component provides a glowing focus state and seamless dark-mode integration.

## Interactive Preview

<Preview>
  <div style={{ maxWidth: '300px', margin: '0 auto', width: '100%' }}>
    <TextField placeholder="Enter your email" />
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
