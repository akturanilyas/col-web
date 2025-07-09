import { cn } from '@/lib/utils';

import { BaseViewProps } from './BaseView.interface';

const BaseView = (props: BaseViewProps) => {
  const { className } = props;

  const classes = cn('flex flex-col', className);

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
};

export default BaseView;
