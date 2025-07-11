import { FC, PropsWithChildren } from 'react';

import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseInput from '@/components/base/text-input/BaseInput';
import BaseView from '@/components/base/view/BaseView';
import { GradientCircle } from '@/components/gradient-circle/GradientCircle';
import { cn } from '@/lib/utils';

export const Hero = () => (
  <BaseView className={'relative mt-10 max-w-screen items-center self-center'}>
    <BaseText
      className={'mb-7 max-w-sm text-center text-3xl font-bold md:max-w-md md:text-4xl lg:mb-12'}
      color={'primary'}
      text={'Sigortacılık daha kolay, daha hızlı, daha hafif'}
    />

    <BaseView className={'relative mb-8 w-full sm:max-w-md lg:max-w-sm items-center px-4'}>
      <BaseInput
        className={'w-full'}
        label={'Eposta adresin'}
        suffix={
          <BaseView className={'mr-1.5 lg:mr-2'}>
            <Button className={'h-[46px] font-semibold md:h-auto md:text-[13px]'}>Kayıt ol</Button>
          </BaseView>
        }
      />
    </BaseView>
    <img
      src={'/screens/mobile-web.png'}
      alt={'mobile-and-web'}
      className={'z-20 mb-10 px-4 md:max-w-[720px]'}
    />
    <GradientCircle className={'left-0 -translate-x-2/3 translate-y-1/4 md:top-1/6 md:-translate-x-1/2'} />
    <GradientCircle className={'top-0 right-0 translate-x-2/3 md:translate-x-1/2'} />
  </BaseView>
);

export const Circle: FC<PropsWithChildren<{ className: string }>> = ({ className, children }) => (
  <BaseView className={cn('spin-2s border-gradient absolute -z-20 aspect-square h-full', className)}>
    {children}
  </BaseView>
);
