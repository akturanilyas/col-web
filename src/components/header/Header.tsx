import Image from 'next/image';

import { Button } from '@/components/base/button/Button';
import BaseView from '@/components/base/view/BaseView';
import { HeaderLink } from '@/components/header/HeaderLink';
import { MobileNav } from '@/components/header/MobileNav';
import { NavItems } from '@/constants/common.constant';

export const Header = () => (
    <header className={'flex w-full flex-row items-center justify-between py-2 p-4 md:py-4 md:px-10 top-0 bg-transparent z-50 relative'}>
      <BaseView className={'flex-1 md:hidden'}>
        <MobileNav items={NavItems} />
      </BaseView>
      <BaseView className={'flex-1 items-center md:items-start'}>
        <Image src={'/compi.png'} alt={'compi.png'} width={115} height={26} sizes={'100vw'} />
      </BaseView>
      <BaseView className={'hidden flex-1 md:flex'}>
        <nav className={'flex flex-row justify-center gap-6 opacity-60'}>
          {NavItems.map((item) => (
           <HeaderLink key={item.href} item={item}/>
          ))}
        </nav>
      </BaseView>
      <BaseView className={'flex-1 items-end'}>
        <Button className={'text-[13px]'}>Giriş yap</Button>
      </BaseView>
    </header>
  );
