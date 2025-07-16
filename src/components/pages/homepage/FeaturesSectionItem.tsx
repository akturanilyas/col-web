import Image from 'next/image';
import { FC } from 'react';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { GradientCircle } from '@/components/gradient-circle/GradientCircle';
import { FeatureItemProps } from '@/components/pages/homepage/FeaturesSectionItem.interface';
import { cn } from '@/lib/utils';

export const FeaturesItem: FC<FeatureItemProps> = (props) => {
  const { item, index } = props;

  const isRtl = index % 2 === 1;

  return (
    <BaseView className={cn('relative items-center gap-4 lg:flex-row lg:gap-16', { 'lg:flex-row-reverse ': isRtl })}>
      <BaseView className={'gap-2 lg:w-1/3'}>
        <BaseView className={'flex-row gap-2'}>
          {item.header.icon}
          <BaseText color={'primary'} className={'line-normal text-[17px] font-semibold'} text={item.header.text} />
        </BaseView>
        <BaseView className={'gap-3'}>
          <BaseText
            text={item.title}
            className={'line-normal text-[22px] font-bold lg:text-[34px] lg:leading-11'}
            color={'primary'}
          />
          <BaseText className={'line-normal text-[22px] font-normal'} color={'secondary'} text={item.description} />
        </BaseView>
      </BaseView>

      <BaseView className={'lg:w-2/3'}>
        <Image
          alt={item.header.text}
          src={item.imgUrl}
          className={'w-full flex-1 object-contain lg:h-[512px]'}
          width={0}
          loading={'lazy'}
          height={0}
          sizes={'100vw'}
        />
      </BaseView>

      <GradientCircle className={item.circleClasses} />
    </BaseView>
  );
};
