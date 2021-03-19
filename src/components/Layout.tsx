import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './Layout.module.css';
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
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={classNames('flex flex-col', styles.container)}>
      <header className="flex justify-between p-4 bg-gray-800 text-white">
        <h1>
          <Link href="/">{SiteName}</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      <main className="flex-grow">{props.children}</main>
      <footer className="p-4 bg-gray-800 text-white">footer</footer>
    </div>
  </>
);

Layout.defaultProps = {
  title: 'Site Title',
  description: 'description',
  keywords: 'keywords',
};
