---
title: "RadioGroup"
description: "A highly accessible radio button group with custom styling."
---

The `RadioGroup` component provides a styled, keyboard-accessible list of mutually exclusive options.

## Interactive Preview

<Preview>
  <div style={{ padding: '1rem' }}>
    <RadioGroup name="fruit" value="apple" options='[{"value":"apple","label":"Apple"},{"value":"banana","label":"Banana"},{"value":"cherry","label":"Cherry"}]' />
  </div>
</Preview>

## Usage

```tsx
import { RadioGroup } from 'luminescent';

export default function App() {
  return (
    <RadioGroup name="theme" value="dark" options={[{ value: 'light', label: 'Light Theme' }, { value: 'dark', label: 'Dark Theme' }]} />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | | The form name for the inputs. |
| `options` | `{ value: string, label: string }[]` | | The radio options. |
| `defaultValue` | `string` | | The default selected value. |
| `onChange` | `(value: string) => void` | | Callback fired when the selection changes. |
