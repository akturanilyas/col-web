'use client';

import { FC } from 'react';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';

export const HeaderLink: FC<{ item: { href: string; label: string } }> = ({ item }) => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ inline: 'start', behavior: 'smooth' });
  };

  return (
    <Button className={'hover:text-primary bg-transparent px-0 text-sm'} onClick={() => scrollToSection(item.href)}>
      <BaseText text={item.label} alt={item.label} className={'text-sm font-normal text-black'} />
    </Button>
  );
};
