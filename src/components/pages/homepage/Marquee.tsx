import Image from 'next/image';
import { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { Providers } from '@/enums/providers.enum';

export const HomepageMarquee = () => {
  const providerImages = useMemo(
    () =>
      Object.values(Providers).map((key) => (
        <Image
          src={`/providers/black/${key}.png`}
          key={key}
          loading={'lazy'}
          width={'0'}
          alt={key}
          height={'0'}
          sizes={'100vw'}
          className={'w-full px-4 h-5 md:h-8 min-h-5 min-w-1'}
        />
      )),
    [],
  );

  return (
    <BaseView className={'z-10 max-w-screen items-center gap-5 overflow-clip md:gap-9'}>
      <BaseText
        color={'secondary'}
        className={'text-base'}
        text={'En prestijli sigorta şirketleri Compi’ye güveniyor'}
      />
      <BaseView className={'min-h-[32px]'}>
        <Marquee autoFill className={'overflow-clip opacity-60'} pauseOnHover>
          {providerImages}
        </Marquee>
      </BaseView>
    </BaseView>
  );
};
