import { ComponentProps, FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export type SectionProps = PropsWithChildren<ComponentProps<'section'>>;
export const Section: FC<SectionProps> = ({ children, className, ...rest }) => (
  <section className={cn('flex max-w-7xl flex-row items-center px-4 lg:px-20', className)} {...rest}>
    {children}
  </section>
);
