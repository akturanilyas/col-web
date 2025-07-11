import BaseView from '@/components/base/view/BaseView';
import { GradientCircle } from '@/components/gradient-circle/GradientCircle';
import { AboutUsSection } from '@/components/pages/homepage/AboutUsSection';
import { FeaturesSection } from '@/components/pages/homepage/FeaturesSection';
import { Footer } from '@/components/pages/homepage/Footer';
import { Circle, Hero } from '@/components/pages/homepage/Hero';
import { HomepageMarquee } from '@/components/pages/homepage/Marquee';
import { References } from '@/components/pages/homepage/References';

export default function Home() {
  return (
    <BaseView className={'relative max-w-screen items-center gap-10 overflow-clip md:gap-16'}>
      <BaseView className={'items-center'}>
        <BaseView className={'relative items-center justify-center'}>
          <Circle className={'h-auto w-3xl md:w-5xl -top-16 md:-top-24 items-center justify-center rotate-[180deg] md:rotate-0'}>
            <Circle className={'h-auto w-xl md:w-3xl items-center justify-center'}>
              <Circle className={'h-auto w-md md:w-xl'} />
            </Circle>
          </Circle>
        </BaseView>
        <Hero />
        <HomepageMarquee />
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
        <BaseView className={'mb-10 max-w-7xl md:mb-20 lg:px-20'}>
          <GradientCircle className={'top-1/2 right-0 translate-x-2/3 -translate-y-1/4'} />
          <Footer />
        </BaseView>
      </BaseView>
    </BaseView>
  );
}
