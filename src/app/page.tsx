import BaseView from '@/components/base/view/BaseView';
import { GradientCircle } from '@/components/gradient-circle/GradientCircle';
import { AboutUsSection } from '@/components/pages/homepage/AboutUsSection';
import { FeaturesSection } from '@/components/pages/homepage/FeaturesSection';
import { Footer } from '@/components/pages/homepage/Footer';
import { Hero } from '@/components/pages/homepage/Hero';
import { References } from '@/components/pages/homepage/References';

export default function Home() {
  return (
    <BaseView className={'relative pt-8 items-center gap-10 md:gap-16 overflow-hidden'}>
      <BaseView className={'relative items-center overflow-auto md:static'}>
        <Hero />
      </BaseView>
      <BaseView className={'max-w-7xl lg:px-20'}>
        <FeaturesSection />
      </BaseView>
      <BaseView className={'w-full max-w-7xl px-4 lg:px-20'}>
        <References />
      </BaseView>

      <BaseView className={'relative items-center'}>
        <BaseView className={'w-full max-w-7xl'}>
          <GradientCircle className={'bottom-0 left-0 -translate-x-2/3'} />
          <AboutUsSection />
        </BaseView>
      </BaseView>

      <BaseView className={'relative items-center'}>
        <BaseView className={'mb-20 max-w-7xl px-20'}>
          <GradientCircle className={'lg:right-0 top-1/2 translate-x-2/3 -translate-y-1/4'}/>
          <Footer />
        </BaseView>
      </BaseView>
    </BaseView>
  );
}
