import Image from 'next/image';
import { FC } from 'react';

import BaseText from '@/components/base/text/BaseText';
import BaseView from '@/components/base/view/BaseView';
import { ReferenceItemProps } from '@/components/pages/homepage/ReferenceItem.interface';

export const ReferenceItem: FC<ReferenceItemProps> = (props) => {
  const { item } = props;

  return (
    <BaseView className={'h-full rounded-xl bg-white/50 p-4'}>
      <BaseView className={'mb-5'}>
        <Image
          src={item.image}
          key={item.name}
          loading={'lazy'}
          width={'0'}
          alt={item.name}
          height={'0'}
          sizes={'100vw'}
          className={'size-20 rounded-full'}
        />
      </BaseView>
      <BaseView className={'mb-4 gap-2'}>
        <BaseText color={'primary'} className={'text-xl font-semibold'} text={item.name} />
        <BaseText color={'secondary'} className={'text-[17px]'} text={item.title} />
      </BaseView>
      <p className={'text-secondary font-[17px]'}>{item.text}</p>
    </BaseView>
  );
};
