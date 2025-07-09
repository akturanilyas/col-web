import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '@/lib/utils';

export type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  const classes = cn('text-white bg-primary py-2.5 px-5 rounded-md font-semibold', className);

  return <button className={classes}>{children}</button>;
};
