import BaseView from '@/components/base/view/BaseView';
import { HomepageMarquee } from '@/components/pages/homepage/Marquee';

export default function Home() {
  return (
    <BaseView className={'border p-5'}>
      <HomepageMarquee />
    </BaseView>
  );
}
