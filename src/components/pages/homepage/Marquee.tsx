import { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { Providers } from '@/enums/providers.enum';

export const HomepageMarquee = () => {
  const providerImages = useMemo(
    () =>
      Object.values(Providers).map((key) => (
        <img className={'mx-4 h-5 md:h-8'} loading={'lazy'} key={key} src={`/providers/black/${key}.png`} alt={key} />
      )),
    [],
  );

  return (
    <BaseView className={'max-w-screen items-center gap-9 overflow-clip'}>
      <BaseText
        color={'secondary'}
        className={'text-base'}
        text={'En prestijli sigorta şirketleri Compi’ye güveniyor'}
      />
      <Marquee autoFill className={'overflow-clip opacity-60'} pauseOnHover>
        {providerImages}
      </Marquee>
    </BaseView>
  );
};
