import { VariantProps } from 'class-variance-authority';
import { HTMLProps, PropsWithChildren, ReactNode } from 'react';

import { textStyle } from '@/components/base/text/BaseText.style';

export type TextProps = Omit<HTMLProps<HTMLSpanElement>, 'size'> & {
  text?: string;
  options?: Record<string, unknown>;
  Icon?: ReactNode;
} & VariantProps<typeof textStyle> &
  PropsWithChildren;
