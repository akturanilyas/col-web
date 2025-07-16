import { FC } from 'react';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';

export const HeaderLink: FC<{ item: { href: string; label: string } }> = ({ item }) => (
  <Button className={'hover:text-primary text-sm bg-transparent px-0'}>
    <BaseText text={item.label} alt={item.label} className={'text-black font-normal text-sm'} />
  </Button>
);
