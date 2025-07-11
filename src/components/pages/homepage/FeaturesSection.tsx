import Image from 'next/image';
import { FC, ReactNode } from 'react';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { Coordinate, Graph, Hierarchy, Podcast, Tasks, ToolBox } from '@/components/icons';
import { Section } from '@/components/section/Section';
import { cn } from '@/lib/utils';

const items: Array<FeatureItem> = [
  {
    imgUrl: '/features/sale.png',
    header: { icon: <Coordinate width={28} height={28} />, text: 'Satış' },
    title: 'Sigorta tekliflerini anında al, karşılaştır ve satışa dönüştür',
    description: 'Sigorta şirketlerinden anında teklif al. Zaman kaybetmeden satışı birkaç tıkla tamamla.',
  },
  {
    imgUrl: '/features/customer.png',
    header: { icon: <Podcast width={28} height={28} />, text: 'Müşteriler' },
    title: 'Tüm müşteri bilgilerini merkezi bir sistemde yönet ve güncel tut',
    description: 'Tüm müşteri bilgilerine kolayca ulaş. Müşteri kayıtlarını tut, bilgileri güncelle, ilişkilerini güçlendir.',
  },
  {
    imgUrl: '/features/corporate-offer.png',
    header: { icon: <ToolBox width={28} height={28} />, text: 'Kurumsal Teklif' },
    title: 'Kurumsal müşterilerin için hızlıca toplu ve özel teklifler hazırla',
    description: 'Kurumsal müşterilerin için teklif almayı kolaylaştır. Bireyselden farklılaşan ihtiyaçlara, özel toplu teklif talepleri oluştur.',
  },
  {
    imgUrl: '/features/demands.png',
    header: { icon: <Tasks width={28} height={28} />, text: 'Satış verileri' },
    title: 'Müşteri taleplerini kategorilere ayır, düzenli ve kolay yönet',
    description: 'Satış ve teklif verilerine anında ulaş. Performansını analiz et, kararlarını veriye göre al.',
  },
  {
    imgUrl: '/features/reports.png',
    header: { icon: <Graph width={28} height={28} />, text: 'Satış' },
    title: 'Şubeler aç, takımı düzenle ve tüm işleyişi kolayca yönet',
    description: 'Yeni şubeler oluştur, çalışanları yetkilendir. Tüm şubelerini tek ekrandan yönet, yetkileri kolayca belirle.',
  },
  {
    imgUrl: '/features/branch.png',
    header: { icon: <Hierarchy width={28} height={28} />, text: 'Satış' },
    title: 'Şubeler aç, takımı düzenle ve tüm işleyişi kolayca yönet',
    description: 'Yeni şubeler oluştur, çalışanları yetkilendir. Tüm şubelerini tek ekrandan yönet, yetkileri kolayca belirle.',
  },
];

export const FeaturesSection = () => (
  <Section>
    <BaseView className={'gap-20'}>
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
};

export type FeatureItemProps = {
  item: FeatureItem;
  index: number;
};

export const FeaturesItem: FC<FeatureItemProps> = (props) => {
  const { item, index } = props;

  const isRtl = index % 2 === 1;

  return (
    <Section>
      <BaseView className={cn('flex-row items-center gap-16', { 'flex-row-reverse': isRtl })}>
        <BaseView className={'w-1/3 gap-2'}>
          <BaseView className={'flex-row gap-2'}>
            {item.header.icon}
            <BaseText color={'primary'} className={'font-semibold'} text={item.header.text} />
          </BaseView>
          <BaseView className={'gap-3'}>
            <BaseText text={item.title} className={'text-[34px] leading-11 font-bold'} color={'primary'} />
            <BaseText className={'text-[22px] font-normal'} color={'secondary'} text={item.description} />
          </BaseView>
        </BaseView>

        <BaseView className={'w-2/3'}>
          <Image alt={item.header.text} src={item.imgUrl} className={'flex-1 w-full'} width={500} height={500}/>
        </BaseView>
      </BaseView>
    </Section>
  );
};
