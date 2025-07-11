
import Image from 'next/image';

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
    <BaseView className={'relative max-w-screen items-center gap-10 overflow-x-clip md:gap-16'}>
      <BaseView className={'relative items-center'}>
        <BaseView className={'relative items-center justify-center'}>
          <Circle
            className={
              '-top-16 h-auto w-3xl rotate-[180deg] items-center justify-center md:-top-24 md:w-5xl md:rotate-0'
            }
          >
            <Circle className={'h-auto w-xl items-center justify-center md:w-3xl'}>
              <Circle className={'h-auto w-md md:w-xl'} />
            </Circle>
          </Circle>
          <BaseView className={'hidden absolute -top-16 lg:flex w-5xl aspect-square'}>
            <Image
              className={'animate-bounce-2 absolute top-1/2 right-0 z-50 translate-x-1/2 -translate-y-1/2'}
              src={'/providers/regular/ak.png'}
              alt={'ak'}
              width={120}
              height={120}
            />
            <Image
              className={'animate-bounce-2 absolute top-32 right-20 -translate-x-1/2 translate-y-1/2'}
              src={'/providers/regular/anadolu.png'}
              alt={'anadolu'}
              width={85}
              height={85}
            />
            <Image
              className={'animate-bounce-2 absolute top-1/4 left-0 -translate-x-1/3'}
              src={'/providers/regular/eureko.png'}
              alt={'eureko'}
              width={130}
              height={130}
            />
            <Image
              className={'animate-bounce-2 absolute bottom-1/3 left-12'}
              src={'/providers/regular/ray.png'}
              alt={'ray'}
              width={90}
              height={90}
            />
            <Image
              className={'animate-bounce-2 absolute translate-y-1/5 top-1/12 left-1/6'}
              src={'/providers/regular/zurich.png'}
              alt={'zurich'}
              width={78}
              height={78}
            />
            <Image
              className={'animate-bounce-2 absolute top-8/12 right-10'}
              src={'/references/ayse.png'}
              alt={'ayse'}
              width={103}
              height={103}
            />
            <Image
              className={'animate-bounce-2 absolute top-1/3 right-0 translate-x-1/3 -translate-y-1/2'}
              src={'/references/baris.png'}
              alt={'baris'}
              width={92}
              height={92}
            />
            <Image
              className={'animate-bounce-2 absolute top-1/2 left-0 -translate-1/2'}
              src={'/references/burak.png'}
              alt={'burak'}
              width={107}
              height={107}
            />
          </BaseView>
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

      <BaseView className={'relative items-center overflow-y-clip'}>
        <BaseView className={'mb-10 max-w-7xl md:mb-20 lg:px-20'}>
          <GradientCircle className={'top-1/2 right-0 translate-x-2/3 -translate-y-1/4'} />
          <Footer />
        </BaseView>
      </BaseView>
    </BaseView>
  );
}
