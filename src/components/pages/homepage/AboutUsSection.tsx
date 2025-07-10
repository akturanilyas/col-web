import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';

export const AboutUsSection = () => (
  <BaseView className={'w-full max-w-[650px] gap-10'}>
    <BaseView className={'items-center gap-2'}>
      <BaseText color={'primary'} className={'text-3xl font-bold'} text={'Hakkımızda'} />
      <BaseText
        color={'secondary'}
        className={'font-inter text-center text-xl text-[20px] leading-none font-normal tracking-normal'}
        text={
          'Compi, finansal teknoloji şirketi Colendi’nin sigorta alanındaki ihtiyaçları gözlemlemesiyle doğdu. Mevcut yazılımların karmaşıklığına ve yetersizliğine karşı, Compi aracıların işini kolaylaştıran sade ve güçlü bir alternatif sunuyor.'
        }
      />
    </BaseView>

    <BaseView className={'items-center gap-2'}>
      <BaseText color={'primary'} className={'text-3xl font-bold'} text={'Misyonumuz'} />
      <BaseText
        color={'secondary'}
        className={'text-center text-xl leading-none tracking-normal'}
        text={'Sigorta şirketleri ve aracıları arasındaki bağları kurmak, sadeleştirmek ve güçlendirmek.'}
      />
    </BaseView>

    <BaseView className={'items-center gap-2'}>
      <BaseText color={'primary'} className={'text-3xl font-bold'} text={'Vizyonumuz'} />
      <BaseText
        color={'secondary'}
        className={'text-center text-xl leading-none tracking-normal'}
        text={'Sigortayı sadece bir koruma değil, aynı zamanda bir zenginleşme aracı olarak konumlandırmak.'}
      />
    </BaseView>
  </BaseView>
);
