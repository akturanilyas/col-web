import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseInput from '@/components/base/text-input/BaseInput';
import BaseView from '@/components/base/view/BaseView';
import { FacebookBlack, InstagramBlack, LnBlack, XBlack } from '@/components/icons';
import { Section } from '@/components/section/Section';
import { NavItems } from '@/constants/common.constant';

export const Footer: FC = () => (
  <Section id={'about-us'} className={'items-center gap-10 flex-col'}>
    <BaseView className={'items-center gap-5 w-full md:w-auto'}>
      <BaseText color={'primary'} className={'text-[22px] md:text-[34px] font-bold'} text={'Hafifliğe adım at'} />
      <BaseInput
        label={'Eposta adresin'}
        suffix={
          <BaseView className={'mr-2'}>
            <Button className={'text-[13px] font-semibold'}>Kayıt ol</Button>
          </BaseView>
        }
      />
    </BaseView>

    <BaseView className={'flex-row items-center gap-7 opacity-60'}>
      <XBlack className={'size-8'} />
      <FacebookBlack className={'size-8'} />
      <InstagramBlack className={'size-8'} />
      <LnBlack className={'size-8'} />
    </BaseView>

    <BaseView >
      <nav className={'flex flex-row justify-center gap-6 opacity-60'}>
        {NavItems.map((item) => (
          <Link key={item.href} href={item.href} className={'text-sm'}>
            <BaseText className={'text-sm text-black'} text={item.label}/>
          </Link>
        ))}
      </nav>
    </BaseView>

    <BaseView>
      <Image src={'/compi.png'} alt={'compi.png'} width={115} height={26} />
    </BaseView>
  </Section>
);
