import { FC, PropsWithChildren } from 'react';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <section className={'flex max-w-7xl flex-row items-center px-20'}>{children}</section>
);
