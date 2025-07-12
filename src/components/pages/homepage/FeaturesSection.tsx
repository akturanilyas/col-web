import Image from 'next/image';
import { FC, ReactNode } from 'react';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { GradientCircle } from '@/components/gradient-circle/GradientCircle';
import { Coordinate, Graph, Hierarchy, Podcast, Tasks, ToolBox } from '@/components/icons';
import { Section } from '@/components/section/Section';
import { cn } from '@/lib/utils';

const items: Array<FeatureItem> = [
  {
    imgUrl: '/features/sale.png',
    header: { icon: <Coordinate width={28} height={28} />, text: 'Satış' },
    title: 'Sigorta tekliflerini anında al, karşılaştır ve satışa dönüştür',
    description: 'Sigorta şirketlerinden anında teklif al. Zaman kaybetmeden satışı birkaç tıkla tamamla.',
    circleClasses: 'top-0 lg:right-0 left-0 lg:left-auto w-3xl -translate-y-1/3 -translate-x-7/12 blur-3xl lg:translate-x-1/2 lg:translate-y-0',
  },
  {
    imgUrl: '/features/reports.png',
    header: { icon: <Graph width={28} height={28} />, text: 'Satış verileri' },
    title: 'Satış ve teklif verilerini analiz ederek satış stratejini güçlendir',
    description:
      'Satış ve teklif verilerine anında ulaş. Performansını analiz et, kararlarını veriye göre al.',
    circleClasses: 'bottom-0 right-0 lg:top-0 lg:left-0 w-3xl translate-y-1/3 translate-x-1/2 lg:-translate-y-1/3 lg:-translate-x-1/2 blur-3xl',
  },
  {
    imgUrl: '/features/customer.png',
    header: { icon: <Podcast width={28} height={28} />, text: 'Müşteriler' },
    title: 'Tüm müşteri bilgilerini merkezi bir sistemde yönet ve güncel tut',
    description:
      'Tüm müşteri bilgilerine kolayca ulaş. Müşteri kayıtlarını tut, bilgileri güncelle, ilişkilerini güçlendir.',
    circleClasses: 'top-0 right-0 w-3xl translate-x-1/2 blur-3xl -translate-y-1/3 hidden lg:flex',
  },
  {
    imgUrl: '/features/corporate-offer.png',
    header: { icon: <ToolBox width={28} height={28} />, text: 'Kurumsal Teklif' },
    title: 'Kurumsal müşterilerin için hızlıca toplu ve özel teklifler hazırla',
    description:
      'Kurumsal müşterilerin için teklif almayı kolaylaştır. Bireyselden farklılaşan ihtiyaçlara, özel toplu teklif talepleri oluştur.',
    circleClasses: 'top-0 left-0 w-3xl -translate-x-1/2 -translate-y-1/3 blur-3xl hidden lg:flex',
  },
  {
    imgUrl: '/features/demands.png',
    header: { icon: <Tasks width={28} height={28} />, text: 'Talepler' },
    title: 'Müşteri taleplerini kategorilere ayır, düzenli ve kolay yönet',
    description: 'Talepleri düzenli ve kategorize şekilde takip et. Karışıklığı önle, öncelik vererek yönetimini kolaylaştır.',
    circleClasses: 'bottom-0 lg:top-0 right-0 w-3xl translate-y-1/3 translate-x-2/3 lg:translate-x-1/2 lg:-translate-y-1/3 blur-3xl',
  },
  {
    imgUrl: '/features/branch.png',
    header: { icon: <Hierarchy width={28} height={28} />, text: 'Şubeler' },
    title: 'Şubeler aç, takımı düzenle ve tüm işleyişi kolayca yönet',
    description:
      'Yeni şubeler oluştur, çalışanları yetkilendir. Tüm şubelerini tek ekrandan yönet, yetkileri kolayca belirle.',
    circleClasses: 'bottom-0 md:right-0 left-0 w-3xl translate-y-1/4 -translate-x-5/6 blur-3xl lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/4',
  },
];

export const FeaturesSection = () => (
  <Section id={'features'}>
    <BaseView className={'gap-12 lg:gap-20'}>
      {items.map((item, index) => (
        <FeaturesItem item={item} key={index} index={index} />
      ))}
    </BaseView>
  </Section>
);

export type FeatureItem = {
  imgUrl: string;
  header: { icon: ReactNode; text: string };
  title: string;
  description: string;
  circleClasses: string;
};

export type FeatureItemProps = {
  item: FeatureItem;
  index: number;
};

export const FeaturesItem: FC<FeatureItemProps> = (props) => {
  const { item, index } = props;

  const isRtl = index % 2 === 1;

  return (
    <BaseView className={cn('relative items-center gap-4 lg:flex-row lg:gap-16', { 'lg:flex-row-reverse ': isRtl })}>
      <BaseView className={'gap-2 lg:w-1/3'}>
        <BaseView className={'flex-row gap-2'}>
          {item.header.icon}
          <BaseText color={'primary'} className={'line-normal text-[17px] font-semibold'} text={item.header.text} />
        </BaseView>
        <BaseView className={'gap-3'}>
          <BaseText
            text={item.title}
            className={'line-normal text-[22px] font-bold lg:text-[34px] lg:leading-11'}
            color={'primary'}
          />
          <BaseText className={'line-normal text-[22px] font-normal'} color={'secondary'} text={item.description} />
        </BaseView>
      </BaseView>

      <BaseView className={'lg:w-2/3'}>
        <Image
          alt={item.header.text}
          src={item.imgUrl}
          className={'w-full flex-1 object-contain lg:h-[520px]'}
          width={500}
          height={500}
        />
      </BaseView>

      <GradientCircle className={item.circleClasses} />
    </BaseView>
  );
};
