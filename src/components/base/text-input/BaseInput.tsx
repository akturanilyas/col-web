'use client';

import { FC, FormEvent } from 'react';

import { Input } from '@/components/base/input/input';
import BaseView from '@/components/base/view/BaseView';
import { InputType, Localization, TextTransform } from '@/enums/common.enum';
import { cn } from '@/lib/utils';

import { BaseInputProps } from './BaseInput.interface';

export const BaseInput: FC<BaseInputProps> = (props) => {
  const { name, label, isError, className, textTransform, type, onInput, prefix, suffix, disabled, ...restProps }
    = props;

  const id = name || 'name';

  const wrapperClasses = cn(
    'flex flex-row w-full items-center rounded-xl bg-transparent transition-all relative min-w-[250px]',
    'border-[0.5px] border-[#C6C6C8] focus-within:border-primary bg-white',
    {
      'border-destructive bg-error-light': isError,
      'bg-disabled': disabled,
    },
    className,
  );

  const inputClasses = cn(
    'peer w-full bg-transparent h-full',
    'border-0 outline-hidden ring-0',
    'not-focus:outline-hidden not-focus:ring-0',
    'focus:outline-hidden focus:ring-0 focus:border-0 disabled:bg-transparent rounded-xl',
    {
      'pt-[18px] px-5 placeholder:text-transparent': label,
      'px-3 placeholder:text-secondary placeholder:opacity-60': !label,
    },
    'focus:placeholder:text-secondary focus:placeholder:opacity-60',
    'leading-[22px]',
    {
      'text-error opacity-100': isError,
    },
  );

  const labelClasses = cn(
    'absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground transition-all pointer-events-none text-ml z-10',
    'peer-focus:text-small peer-focus:top-4',
    'peer-[:not(:placeholder-shown)]:text-small peer-[:not(:placeholder-shown)]:top-4',
    'text-secondary opacity-60',
    {
      'text-error opacity-100': isError,
    },
  );

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      value,
    }: {
      value: string | undefined;
    } = event.currentTarget;

    if (value && type === InputType.NUMBER) {
      if (/^\d+$/.test(value)) {
        onInput && onInput(event);
      }

      return;
    }

    if (textTransform) {
      const functions: Record<TextTransform, () => void> = {
        [TextTransform.CAPITALIZE]() {
          const input = event.currentTarget;
          const start = input.selectionStart;

          event.currentTarget.value = event.currentTarget.value
            .split(' ')
            .map((word) => word.charAt(0).toLocaleUpperCase(Localization.TR) + word.slice(1))
            .join(' ');
          input.setSelectionRange(start, start);
        },
        [TextTransform.UPPERCASE]() {
          const input = event.currentTarget;
          const start = input.selectionStart;

          event.currentTarget.value = event.currentTarget.value.toLocaleUpperCase(Localization.TR);
          input.setSelectionRange(start, start);
        },
      };

      functions[textTransform]();
    }

    onInput && onInput(event);
  };

  const inputWrapperClasses = cn('relative flex-1', {
    'h-[50px]': label,
    'h-10': !label,
  });

  return (
    <BaseView className={wrapperClasses}>
      {prefix}
      <BaseView className={inputWrapperClasses}>
        <Input
          id={id}
          spellCheck={false}
          className={inputClasses}
          autoComplete={'off'}
          placeholder={label ? ' ' : restProps.placeholder}
          {...restProps}
          disabled={disabled}
          onInput={(event) => handleOnChange(event)}
        />
        {label && (
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
        )}
      </BaseView>
      {suffix}
    </BaseView>
  );
};

export default BaseInput;
