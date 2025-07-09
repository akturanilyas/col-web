import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';

export const Header = () => {
  const headerTitleClassname = 'text-sm';

  return (
    <header className={'flex w-full flex-row items-center justify-between px-10 py-4'}>
      <BaseView className={'flex-1'}>
        <Image src={'/compi.png'} alt={'compi.png'} width={115} height={26} />
      </BaseView>
      <BaseView className={'flex-1'}>
        <nav className={'flex flex-row justify-center gap-6 opacity-60'}>
          <Link href={''} className={headerTitleClassname}>
            <BaseText>Özellikler</BaseText>
          </Link>
          <Link href={''} className={headerTitleClassname}>
            <BaseText>Referanslar</BaseText>
          </Link>
          <Link href={''} className={headerTitleClassname}>
            <BaseText>Hakkımızda</BaseText>
          </Link>
        </nav>
      </BaseView>
      <BaseView className={'flex-1 items-end'}>
        <Button className={'text-[13px]'}>Giriş yap</Button>
      </BaseView>
    </header>
  );
};
