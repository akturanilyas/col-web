import { Button } from '@/components/base/button/Button';
import BaseText from '@/components/base/text/BaseText';
import BaseInput from '@/components/base/text-input/BaseInput';
import BaseView from '@/components/base/view/BaseView';
import { HomepageMarquee } from '@/components/pages/homepage/Marquee';

export const Hero = () => (
  <BaseView className={'z-10 mt-10 max-w-screen items-center self-center'}>
    <BaseText
      className={'mb-7 max-w-sm text-center text-3xl font-bold md:max-w-md md:text-4xl lg:mb-12'}
      color={'primary'}
      text={'Sigortacılık daha kolay, daha hızlı, daha hafif'}
    />

    <BaseView className={'mb-8 w-full max-w-sm px-4'}>
      <BaseInput
        className={'w-full'}
        label={'Eposta adresin'}
        suffix={
          <BaseView className={'mr-1.5 lg:mr-2'}>
            <Button className={'h-[46px] font-semibold md:h-auto md:text-[13px]'}>Kayıt ol</Button>
          </BaseView>
        }
      />
    </BaseView>

    <BaseView className={'items-center px-4'}>
      <img
        src={'/screens/mobile-web.png'}
        alt={'mobile-and-web'}
        className={'mb-10 w-11/12 md:max-w-2/3 lg:mb-20 lg:max-w-[720px]'}
      />
    </BaseView>
    <HomepageMarquee />
  </BaseView>
);
