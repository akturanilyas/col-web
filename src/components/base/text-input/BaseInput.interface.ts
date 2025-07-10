import { HTMLProps, ReactNode } from 'react';

import { InputType, TextTransform } from '@/enums/common.enum';

export type BaseInputProps = Omit<HTMLProps<HTMLInputElement>, 'form' | 'prefix' | 'suffix'> & {
  type?: InputType;
  label?: string;
  className?: string;
  inputClassName?: string;
  isError?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  textTransform?: TextTransform;
  onChangeText?: (input: string | undefined, onChange?: (input: string | undefined) => void) => void;
};
