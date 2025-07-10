import { cva } from 'class-variance-authority';

export const textStyle = cva('text-black tracking-tight inline-flex items-center gap-2 leading-none', {
  variants: {
    size: {},
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
});
