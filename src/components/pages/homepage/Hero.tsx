import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';

export const Hero = () => (
  <BaseView className={'self-center'}>
    <BaseText
      className={'max-w-[450px] text-center text-4xl font-bold'}
      color={'primary'}
      text={'Sigortacılık daha kolay, daha hızlı, daha hafif'}
    />
  </BaseView>
);
