import localFont from 'next/font/local';

export const nunito = localFont({
  src: [
    {
      path: '../../(assets)/fonts/nunito-400-normal.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../(assets)/fonts/nunito-400-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../(assets)/fonts/nunito-500-normal.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../(assets)/fonts/nunito-500-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../(assets)/fonts/nunito-600-normal.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../(assets)/fonts/nunito-600-italic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../(assets)/fonts/nunito-700-normal.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../(assets)/fonts/nunito-700-italic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  preload: true,
  fallback: ['Nunito', 'sans-serif']
});
