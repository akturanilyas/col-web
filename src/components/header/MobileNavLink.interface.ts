import { ReactNode } from 'react';

import { ButtonProps } from '@/components/base/button/Button';

export type MobileNavLinkProps = ButtonProps & {
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  href: string;
};

