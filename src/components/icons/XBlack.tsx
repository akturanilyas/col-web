import * as React from 'react';
import type { SVGProps } from 'react';

const SvgXBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns={'http://www.w3.org/2000/svg'} width={'24'} height={'24'} fill={'none'} viewBox={'0 0 23 25'} {...props}>
    <g clipPath={'url(#x-black_svg__a)'}>
      <path
        fill={'#000'}
        d={'M13.688 10.694 22.25.741h-2.029l-7.434 8.642L6.849.741H0L8.98 13.81 0 24.247h2.03l7.85-9.127 6.271 9.127H23zm-2.779 3.23-.91-1.3L2.76 2.268h3.117l5.842 8.356.91 1.302 7.593 10.862h-3.116l-6.197-8.864'}
      />
    </g>
    <defs>
      <clipPath id={'x-black_svg__a'}>
        <path fill={'#fff'} d={'M0 .741h23v23.517H0z'} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgXBlack;
