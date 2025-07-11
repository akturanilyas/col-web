import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';

export const AboutUsSection = () => (
  <BaseView className={'w-full max-w-[650px] gap-10 p-4'}>
    <BaseView className={'items-center gap-2'}>
      <BaseText color={'primary'} className={'text-[22px] font-bold md:text-3xl'} text={'Hakkımızda'} />
      <BaseText
        color={'secondary'}
        className={'font-inter text-center text-xl text-[17px] line-normal font-normal tracking-normal md:text-[20px]'}
        text={
          'Compi, finansal teknoloji şirketi Colendi’nin sigorta alanındaki ihtiyaçları gözlemlemesiyle doğdu. Mevcut yazılımların karmaşıklığına ve yetersizliğine karşı, Compi aracıların işini kolaylaştıran sade ve güçlü bir alternatif sunuyor.'
        }
      />
    </BaseView>

    <BaseView className={'items-center gap-2'}>
      <BaseText color={'primary'} className={'text-[22px] font-bold md:text-3xl'} text={'Misyonumuz'} />
      <BaseText
        color={'secondary'}
        className={'text-center line-normal tracking-normal text-[17px] md:text-[20px]'}
        text={'Sigorta şirketleri ve aracıları arasındaki bağları kurmak, sadeleştirmek ve güçlendirmek.'}
      />
    </BaseView>

    <BaseView className={'items-center gap-2'}>
      <BaseText color={'primary'} className={'text-[22px] font-bold md:text-3xl'} text={'Vizyonumuz'} />
      <BaseText
        color={'secondary'}
        className={'text-center line-normal tracking-normal text-[17px] md:text-[20px]'}
        text={'Sigortayı sadece bir koruma değil, aynı zamanda bir zenginleşme aracı olarak konumlandırmak.'}
      />
    </BaseView>
  </BaseView>
);
