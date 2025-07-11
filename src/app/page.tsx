import Image from 'next/image';
import { FC } from 'react';

import BaseView from '@/components/base/view/BaseView';
import { AboutUsSection } from '@/components/pages/homepage/AboutUsSection';
import { FeaturesSection } from '@/components/pages/homepage/FeaturesSection';
import { Footer } from '@/components/pages/homepage/Footer';
import { Hero } from '@/components/pages/homepage/Hero';
import { References } from '@/components/pages/homepage/References';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <BaseView className={'mt-8 items-center overflow-hidden gap-16'}>
      <BaseView className={'relative items-center'}>
        <BaseView className={'absolute items-center justify-center lg:-top-20'}>
          <BaseView className={'z-40 hidden md:flex'}>
            <Image
              className={'animate-bounce-2 absolute top-1/2 right-0 z-20 translate-x-1/2 -translate-y-1/2'}
              src={'/providers/regular/ak.png'}
              alt={'ak'}
              width={120}
              height={120}
            />
            <Image
              className={'animate-bounce-2 absolute top-20 right-20 -translate-x-full translate-y-44'}
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
              className={'animate-bounce-2 absolute bottom-1/3 left-20'}
              src={'/providers/regular/ray.png'}
              alt={'ray'}
              width={90}
              height={90}
            />
            <Image
              className={'animate-bounce-2 absolute top-1/6 left-1/5'}
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
              className={'animate-bounce-2 absolute top-1/3 right-0 -translate-y-1/2'}
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
          <BaseView
            className={cn(
              'border-gradient relative -z-10 aspect-square w-sm items-center justify-center rounded-full opacity-60 md:w-4xl lg:w-6xl',
            )}
          >
            <BaseView>
              <BaseView className={'bg-radial-gradient absolute top-40 right-0 aspect-square w-2/3 rounded-full'} />
              <BaseView
                className={
                  'bg-radial-gradient absolute bottom-0 left-0 aspect-square w-2/3 -translate-x-1/3 rounded-full'
                }
              />
            </BaseView>

            <BaseView
              className={cn(
                'border-gradient -z-10 aspect-square w-lg items-center justify-center rounded-full lg:w-3xl',
              )}
            >
              <BaseView
                className={cn(
                  'border-gradient -z-10 aspect-square w-2xs items-center justify-center rounded-full lg:w-xl',
                )}
              />
            </BaseView>
          </BaseView>
        </BaseView>
        <Hero />
      </BaseView>
      <BaseView className={'lg:px-20'}>
        <FeaturesSection />
      </BaseView>
      <BaseView className={'w-full max-w-7xl px-4 lg:px-20'}>
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
