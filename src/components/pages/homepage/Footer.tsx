import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseInput from '@/components/base/text-input/BaseInput';
import BaseView from '@/components/base/view/BaseView';
import { FacebookBlack, InstagramBlack, LnBlack, XBlack } from '@/components/icons';

export const Footer: FC = () => (
  <BaseView className={'items-center'}>
    <BaseView className={'mb-20 items-center'}>
      <BaseText color={'primary'} className={'mb-5 text-[34px] font-bold'} text={'Hafifliğe adım at'} />
      <BaseInput
        label={'Eposta adresin'}
        suffix={
          <BaseView className={'mr-2'}>
            <Button className={'text-[13px] font-semibold'}>Kayıt ol</Button>
          </BaseView>
        }
      />
    </BaseView>

    <BaseView className={'flex-row items-center gap-7 opacity-60 mb-28'}>
      <XBlack className={'size-6'} />
      <FacebookBlack className={'size-7'} />
      <InstagramBlack className={'size-8'} />
      <LnBlack className={'size-8'} />
    </BaseView>

    <BaseView className={'mb-28'}>
      <nav className={'flex flex-row justify-center gap-6 opacity-60'}>
        <Link href={''} className={'text-sm'}>
          <BaseText className={'text-sm text-black'}>Özellikler</BaseText>
        </Link>
        <Link href={''} className={'text-sm'}>
          <BaseText className={'text-sm text-black'}>Referanslar</BaseText>
        </Link>
        <Link href={''} className={'text-sm'}>
          <BaseText className={'text-sm text-black'}>Hakkımızda</BaseText>
        </Link>
      </nav>
    </BaseView>

    <BaseView >
      <Image src={'/compi.png'} alt={'compi.png'} width={115} height={26} />
    </BaseView>
  </BaseView>
);
