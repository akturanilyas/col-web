import { FC } from 'react';

import BaseView from '@/components/base/view/BaseView';
import { cn } from '@/lib/utils';

export const GradientCircle: FC<{ className: string }> = ({ className }) => (
  <BaseView className={cn('absolute top-20 -z-10 aspect-square rounded-full bg-radial-gradient', className)} />
);
