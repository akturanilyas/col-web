'use client';

import { FC } from 'react';

import { Button } from '@/components/base/button/Button';
import { MobileNavLinkProps } from '@/components/header/MobileNavLink.interface';
import { cn } from '@/lib/utils';

export const MobileLink: FC<MobileNavLinkProps> = ({ href, onOpenChange, className, children, ...props }) => (
  <Button
    onClick={() => {
      if (onOpenChange) {
        onOpenChange(false);
      }

      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView();
      }, 200);
    }}
    className={cn('text-secondary w-min bg-transparent px-0 text-[22px] font-normal', className)}
    {...props}
  >
    {children}
  </Button>
);
