"use client";

import { RadioGroup as OriginalRadioGroup, SegmentedControl as OriginalSegmentedControl, FloatingMenu as OriginalFloatingMenu } from 'luminescent';
export * from 'luminescent';

const safeParse = (val: any, fallback: any) => {
  if (!val) return fallback;
  if (typeof val === 'string') {
    try { return JSON.parse(val); } catch (e) { return fallback; }
  }
  return val;
};

export const RadioGroup = (props: any) => {
  return <OriginalRadioGroup {...props} options={safeParse(props.options, [{value: 'fallback', label: 'Fallback'}])} />
}

export const SegmentedControl = (props: any) => {
  return <OriginalSegmentedControl {...props} tabs={safeParse(props.tabs, ['Fallback'])} />
}

export const FloatingMenu = (props: any) => {
  return <OriginalFloatingMenu {...props} items={safeParse(props.items, [{label: 'Fallback', href: '#'}])} />
}
