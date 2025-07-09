import BaseView from '@/components/base/view/BaseView';
import { Providers } from '@/enums/providers.enum';

export const HomepageMarquee = () => {
  const providerImages = Object.values(Providers).map((key) => (
    <img className={'h-8'} key={key} src={`/providers/black/${key}.png`} alt={key} />
  ));

  return (
    <BaseView className={'relative overflow-x-hidden'}>
      <BaseView className={'animate-marquee flex-row gap-8 whitespace-nowrap opacity-60'}>
        {providerImages}
        {providerImages}
      </BaseView>
    </BaseView>
  );
};
