import { LayoutProps } from '@/layout.type';
import { nunito } from '@theme/font';
import dynamic from 'next/dynamic';
import Loading from './loading';
import type { Metadata } from 'next';

const MainLayout = dynamic(() => import('#main/layouts'), {
  ssr: false,
  loading: () => <Loading />
});

export const metadata: Metadata = {
  title: {
    default: 'Notir',
    template: '%s | Notir'
  }
};
export default function RootLayout({ children }: LayoutProps) {
  console.log('Server Side Rendering  ');
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        {/* eslint-disable-next-line max-len */}
      </head>
      <body className={`${nunito.className}`}>
        <style>{`@keyframes breathe{0%,100%{opacity:1;}50%{opacity:0.4;}}}`}</style>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
