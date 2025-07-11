import Image from 'next/image';
import { FC } from 'react';

import BaseView from '@/components/base/view/BaseView';
import { AboutUsSection } from '@/components/pages/homepage/AboutUsSection';
import { FeaturesSection } from '@/components/pages/homepage/FeaturesSection';
import { Footer } from '@/components/pages/homepage/Footer';
import { Hero } from '@/components/pages/homepage/Hero';
import { HomepageMarquee } from '@/components/pages/homepage/Marquee';
import { References } from '@/components/pages/homepage/References';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <BaseView className={'mt-8 items-center'}>
      <BaseView className={'absolute -top-20 items-center justify-center'}>
        <BaseView className={'z-40'}>
          <Image className={'absolute animate-bounce-2 top-1/2 translate-x-1/2 -translate-y-1/2 right-0 z-20'} src={'/providers/regular/ak.png'} alt={'ak'} width={120} height={120} />
          <Image className={'absolute animate-bounce-2 right-20 top-20 translate-y-44 -translate-x-full'} src={'/providers/regular/anadolu.png'} alt={'anadolu'} width={85} height={85} />
          <Image className={'absolute animate-bounce-2 left-0 -translate-x-1/3 top-1/4'} src={'/providers/regular/eureko.png'} alt={'eureko'} width={130} height={130} />
          <Image className={'absolute animate-bounce-2 left-20 bottom-1/3'} src={'/providers/regular/ray.png'} alt={'ray'} width={90} height={90} />
          <Image className={'absolute animate-bounce-2 left-1/5 top-1/6'} src={'/providers/regular/zurich.png'} alt={'zurich'} width={78} height={78} />
          <Image className={'absolute animate-bounce-2 right-10 top-8/12'} src={'/references/ayse.png'} alt={'ayse'} width={103} height={103} />
          <Image className={'absolute animate-bounce-2 right-0 top-1/3 -translate-y-1/2'} src={'/references/baris.png'} alt={'baris'} width={92} height={92} />
          <Image className={'absolute animate-bounce-2 left-0 top-1/2 -translate-1/2'} src={'/references/burak.png'} alt={'burak'} width={107} height={107} />
        </BaseView>
        <BaseView className={cn('-z-10 relative aspect-square w-6xl items-center justify-center rounded-full border-gradient opacity-60')}>
          <BaseView>
            <BaseView className={'w-2/3 aspect-square absolute right-0 top-40 rounded-full bg-radial-gradient'}/>
            <BaseView className={'w-2/3 aspect-square absolute left-0 bottom-0 -translate-x-1/3 rounded-full bg-radial-gradient'}/>
          </BaseView>

          <BaseView className={cn('-z-10 aspect-square w-3xl items-center justify-center rounded-full border-gradient')}>
            <BaseView className={cn('-z-10 aspect-square w-xl items-center justify-center rounded-full border-gradient')} />
          </BaseView>
        </BaseView>
      </BaseView>
      <Hero />
      <HomepageMarquee />
      <BaseView className={'mb-20 px-20'}>
        <FeaturesSection />
      </BaseView>
      <BaseView className={'mb-20 w-full max-w-7xl px-20'}>
        <References />
      </BaseView>

      <BaseView className={'mb-28'}>
        <AboutUsSection />
      </BaseView>

      <BaseView className={'mb-20 px-20'}>
        <Footer />
      </BaseView>
    </BaseView>
  );
}

const Circle: FC<{ className: string }> = ({ className }) => (
  <BaseView className={cn('absolute top-20 -z-10 aspect-square rounded-full border', className)} />
);
