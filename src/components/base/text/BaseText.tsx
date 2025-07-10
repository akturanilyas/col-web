import { FC } from 'react';

import { textStyle } from '@/components/base/text/BaseText.style';
import Trans from '@/components/base/text/Trans';
import { cn } from '@/lib/utils';

import { TextProps } from './BaseText.interface';

const BaseText: FC<TextProps> = (props) => {
  const { text, options, Icon, className, children, size, color } = props;

  return (
    <span className={cn(textStyle({ className, size, color }))}>
      {Icon}
      {text}
      <Trans className={cn('leading-none', className)} i18nKey={text} values={options}>
        {children}
      </Trans>
    </span>
  );
};

export default BaseText;
