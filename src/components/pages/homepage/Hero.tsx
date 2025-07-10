import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseInput from '@/components/base/text-input/BaseInput';
import BaseView from '@/components/base/view/BaseView';

export const Hero = () => (
  <BaseView className={'items-center self-center z-10 mb-20'}>
    <BaseText
      className={'mb-12 max-w-[450px] text-center text-4xl font-bold'}
      color={'primary'}
      text={'Sigortacılık daha kolay, daha hızlı, daha hafif'}
    />

    <BaseView className={'mb-8'}>
      <BaseInput
        label={'Eposta adresin'}
        suffix={
          <BaseView className={'mr-2'}>
            <Button className={'text-[13px] font-semibold'}>Kayıt ol</Button>
          </BaseView>
        }
      />
    </BaseView>

    <img src={'/screens/mobile-web.png'} alt={'mobile-and-web'} className={'max-w-3xl'} />
  </BaseView>
);

