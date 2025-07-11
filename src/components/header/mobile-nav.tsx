'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode, useState } from 'react';

import { Button } from '@/components/base/button/Button';
import BaseView from '@/components/base/view/BaseView';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function MobileNav({ items, className }: { items: { href: string; label: string }[]; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            'extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 self-start bg-transparent !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent',
            className,
          )}
        >
          <div className={'relative flex h-8 w-4 items-center justify-center'}>
            <div className={'text-primary relative size-4'}>
              <span
                className={cn(
                  'bg-primary absolute left-0 block h-[3px] w-6 transition-all duration-100',
                  open ? 'top-[0.4rem] -rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'bg-primary absolute left-0 block h-[3px] w-6 transition-all duration-100 ',
                  open ? 'top-[0.4rem] rotate-45' : 'top-1.5',
                )}
              />

              <span
                className={cn(
                  'bg-primary absolute left-0 block h-[3px] w-6 transition-all duration-100 ',
                  open ? 'top-[0.4rem] rotate-45' : 'top-3',
                )}
              />
            </div>
            <span className={'sr-only'}>Toggle Menu</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={
          'bg-background/90 no-scrollbar z-20 h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100'
        }
        align={'start'}
        side={'bottom'}
        alignOffset={-16}
        sideOffset={14}
      >
        <BaseView className={'gap-12 overflow-auto px-6 py-6'}>
          <BaseView className={'gap-4'}>
            <BaseView className={'gap-3'}>
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </BaseView>
          </BaseView>
        </BaseView>
      </PopoverContent>
    </Popover>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (onOpenChange) {
          onOpenChange(false);
        }
      }}
      className={cn('text-secondary text-[22px] font-normal', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
