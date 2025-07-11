'use client';

import { FC, useState } from 'react';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/base/carousel/Carousel';
import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { GradientCircle } from '@/components/gradient-circle/GradientCircle';

export const REFERENCE_ITEMS: Array<ReferenceItemType> = [
  {
    image: '/references/ayse.png',
    name: 'Ayşe Erdem',
    title: 'Kurucu, Albatros Sigorta – İzmir',
    text: '“Compi’ye geçtikten sonra teklif almak ve karşılaştırmak 10 dakikadan 1 dakikaya indi. Artık müşteriye daha hızlı dönebiliyoruz ve bu fark yaratıyor. Ayrıca kullanıcı arayüzü çok sade, eğitim neredeyse gerekmedi.”',
  },
  {
    image: '/references/baris.png',
    name: 'Barış Yıldırım',
    title: 'Şube Müdürü, Mavi Poliçe Sigorta',
    text: '“Eskiden farklı sigorta şirketleri için ayrı paneller kullanıyorduk. Compi ile hepsi tek ekranda toplandı. Şube yöneticisi olarak hem personel takibi hem teklif kontrolü çok kolaylaştı.”',
  },
  {
    image: '/references/burak.png',
    name: 'Burak Şen',
    title: 'Broker Yöneticisi, Nova Brokerlık',
    text: '“Compi, broker yapımız için beklediğimiz esnekliği sağladı. Kurumsal teklif modülü ile büyük müşterilerimizden gelen talepleri hızlıca yönetiyoruz. Raporlama ve veri aktarım fonksiyonları da büyük kolaylık sağladı.”',
  },
];

export const References: FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  const currentSlide = (api?.selectedScrollSnap() || 0);

  return (
    <BaseView className={'relative w-full gap-5 lg:gap-7'}>
      <GradientCircle className={'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5xl'}/>
      <BaseView className={'self-center'}>
        <BaseText color={'primary'} className={'text-[34px] font-bold'} text={'Referanslar'} />
      </BaseView>
      <Carousel className={'w-full'} setApi={setApi}>
        <CarouselContent className={'-ml-4'}>
          {REFERENCE_ITEMS.map((item, index) => (
            <CarouselItem key={index} className={'pl-4 lg:basis-1/3'}>
              <ReferenceItem item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <BaseView className={'flex-row items-center justify-center gap-2 md:hidden'}>
        {REFERENCE_ITEMS.map((_, index) => (
          <BaseView
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide ? 'h-3 w-8 bg-primary' : 'h-3 w-3 bg-primary hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </BaseView>
    </BaseView>
  );
};
export type ReferenceItemType = {
  image: string;
  name: string;
  title: string;
  text: string;
};

export type ReferenceItemProps = {
  item: ReferenceItemType;
};
export const ReferenceItem: FC<ReferenceItemProps> = (props) => {
  const { item } = props;

  return (
    <BaseView className={'rounded-xl bg-white/50 p-4'}>
      <BaseView className={'mb-5'}>
        <img className={'size-20 rounded-full'} src={item.image} alt={item.name} />
      </BaseView>
      <BaseView className={'mb-4 gap-2'}>
        <BaseText color={'primary'} className={'text-xl font-semibold'} text={item.name} />
        <BaseText color={'secondary'} className={'text-[17px]'} text={item.title} />
      </BaseView>
      <p className={'text-secondary font-[17px]'}>{item.text}</p>
    </BaseView>
  );
};
