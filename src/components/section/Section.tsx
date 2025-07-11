import { ComponentProps, FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export type SectionProps = PropsWithChildren<ComponentProps<'div'>>;
export const Section: FC<SectionProps> = ({ children, className, ...rest }) => (
  <div className={cn('flex max-w-7xl flex-row items-center px-4 lg:px-20', className)} {...rest}>
    {children}
  </div>
);
