'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { MobileNav } from '@/components/header/mobile-nav';
import { NavItems } from '@/constants/common.constant';

export const Header = () => (
    <header className={'flex w-full flex-row items-center justify-between px-4 py-4 pb-0 md:px-10'}>
      <BaseView className={'flex-1 md:hidden'}>
        <MobileNav items={NavItems} />
      </BaseView>
      <BaseView className={'flex-1 items-center md:items-start'}>
        <Image src={'/compi.png'} alt={'compi.png'} width={115} height={26} />
      </BaseView>
      <BaseView className={'hidden flex-1 md:flex'}>
        <nav className={'flex flex-row justify-center gap-6 opacity-60'}>
          {NavItems.map((item) => (
            <Link key={item.href} href={item.href} className={'text-sm text-secondary'}>
              <BaseText text={item.label} alt={item.label} />
            </Link>
          ))}
        </nav>
      </BaseView>
      <BaseView className={'flex-1 items-end'}>
        <Button className={'text-[13px]'}>Giriş yap</Button>
      </BaseView>
    </header>
  );
