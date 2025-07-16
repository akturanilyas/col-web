import { ReactNode } from 'react';

export type FeatureItemType = {
  imgUrl: string;
  header: { icon: ReactNode; text: string };
  title: string;
  description: string;
  circleClasses: string;
};

export type FeatureItemProps = {
  item: FeatureItemType;
  index: number;
};
