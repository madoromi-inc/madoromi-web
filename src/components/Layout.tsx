import Head from 'next/head';
import React from 'react';
import { SiteUrl, SiteName } from '@src/constants';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
};

export const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={props.description} />
      <meta property="og:description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content={`${SiteUrl}/logo.png`} />
      <meta property="og:site_name" content={SiteName} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={`${SiteUrl}/logo.png`} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
        rel="stylesheet"
      />
    </Head>
    {props.children}
  </>
);

Layout.defaultProps = {
  title: '株式会社まどろみ',
  description: '株式会社まどろみ まどろみのある豊かな世界を。',
  keywords: 'まどろみ,madoromi',
};
