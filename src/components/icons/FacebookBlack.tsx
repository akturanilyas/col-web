import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFacebookBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns={'http://www.w3.org/2000/svg'} width={'24'} height={'24'} fill={'none'} viewBox={'0 0 30 31'} {...props}>
    <g clipPath={'url(#facebook-black_svg__a)'}>
      <path
        fill={'#000'}
        d={'M30 15.5c0-8.284-6.716-15-15-15S0 7.216 0 15.5c0 7.034 4.843 12.937 11.377 14.558v-9.974H8.284V15.5h3.093v-1.975c0-5.106 2.31-7.472 7.323-7.472.95 0 2.59.187 3.26.373v4.155c-.353-.038-.968-.056-1.732-.056-2.46 0-3.41.932-3.41 3.354V15.5h4.9l-.842 4.584h-4.058V30.39c7.427-.897 13.183-7.22 13.183-14.89z'}
      />
      <path
        fill={'#fff'}
        d={'m20.875 20.084.842-4.584h-4.9V13.88c0-2.422.951-3.354 3.41-3.354.764 0 1.38.019 1.733.056V6.426c-.67-.187-2.31-.373-3.26-.373-5.013 0-7.324 2.367-7.324 7.472V15.5H8.283v4.584h3.093v9.975a15 15 0 0 0 5.441.331V20.084z'}
      />
    </g>
    <defs>
      <clipPath id={'facebook-black_svg__a'}>
        <path fill={'#fff'} d={'M0 .5h30v30H0z'} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFacebookBlack;
