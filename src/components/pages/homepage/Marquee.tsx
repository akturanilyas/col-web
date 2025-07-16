import { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { Providers } from '@/enums/providers.enum';

export const HomepageMarquee = () => {
  const providerImages = useMemo(
    () =>
      Object.values(Providers).map((key) => (
        <BaseView key={key} className={'mx-8'} >
          <img
            className={'h-auto w-full'}
            src={`/providers/black/${key}.png`}
            loading={'lazy'}
            alt={key}
          />
        </BaseView>
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
        <Marquee autoFill className={'overflow-clip opacity-60'} pauseOnHover >
          {providerImages}
        </Marquee>
      </BaseView>
    </BaseView>
  );
};
