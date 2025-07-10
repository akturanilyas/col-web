import { ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      `border-input file:text-foreground placeholder:text-muted-foreground hover:border-primary focus:border-primary 
        disabled:bg-disabled-light flex h-9 w-full rounded-md 
        border bg-transparent px-3 py-1 text-base transition-colors
        file:border-0 file:bg-transparent file:text-sm file:font-medium
        focus:border-[1.5px] focus-visible:ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
      className,
    )}
    ref={ref}
    {...props}
  />
));

Input.displayName = 'Input';

export { Input };
