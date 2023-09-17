import useScrollPosition from '@react-hook/window-scroll';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Layout } from '@src/components/Layout';
import { Logo } from '@src/components/Logo';

const LOGO_HIDE_SCROLL = 300;

const IndexPage: React.FC = () => {
  const scrollY = useScrollPosition();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Layout>
      <header className="fixed top-0 inset-x-0 flex justify-between p-4 text-white z-30">
        <h1 className="w-32">
          <Link href="/">
            <a
              className={classNames(
                'block w-full max-w-lg transition-opacity duration-1000 opacity-100',
                {
                  'opacity-100': show && scrollY > LOGO_HIDE_SCROLL,
                }
              )}
            >
              <Logo />
            </a>
          </Link>
        </h1>
      </header>
      <main className="relative" style={{
        backgroundImage: 'url(/kv_thumb.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}>
        <div className="absolute inset-0 bg-gray-900 opacity-60"/>
        <div className="relative">
          <div className="w-full">
            <div className="max-w-screen-2xl mx-auto text-white p-4 pb-16">
              <h1 className="mt-12 text-xl sm:text-3xl">
                プライバシーポリシー
              </h1>
              <div className="mt-8 leading-loose">
                <ul className="space-y-8">
                  <li>
                    <h2>基本方針</h2>
                    <p>弊社は、ユーザーの個人情報を尊重し、その保護を重要な責務と認識しております。このプライバシーポリシーにおいて、ユーザーの個人情報の取扱いについて説明します。</p>
                  </li>
                  <li>
                    <h2>収集する情報</h2>
                    <p>弊社は、以下の情報を収集する場合があります。</p>
                    <ul>
                      <li>氏名</li>
                      <li>メールアドレス</li>
                      <li>住所</li>
                      <li>その他、サービス利用の際に必要な情報</li>
                    </ul>
                  </li>
                  <li>
                    <h2>情報収集の目的</h2>
                    <p>弊社がユーザーから情報を収集する目的は以下のとおりです。</p>
                    <ul>
                      <li>サービス提供のため</li>
                      <li>お問い合わせ対応のため</li>
                      <li>ニュースレターや情報提供のため</li>
                    </ul>
                  </li>
                  <li>
                    <h2>第三者への情報提供</h2>
                    <p>弊社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
                    <ul>
                      <li>ユーザーの同意がある場合</li>
                      <li>法律の要求に応じる場合</li>
                    </ul>
                  </li>
                  <li>
                    <h2>ユーザーの権利</h2>
                    <p>ユーザーは、自らの個人情報の訂正、削除、利用停止の要求を弊社に行うことができます。</p>
                  </li>
                  <li>
                    <h2>クッキーやトラッキング技術</h2>
                    <p>弊社のウェブサイトは、ユーザーエクスペリエンスの向上のためにクッキーやその他のトラッキング技術を使用する場合があります。</p>
                  </li>
                  <li>
                    <h2>セキュリティー対策</h2>
                    <p>弊社は、ユーザーの個人情報の安全を確保するために適切なセキュリティー対策を実施しています。</p>
                  </li>
                  <li>
                    <h2>連絡先</h2>
                    <p>プライバシーに関する問い合わせは、以下の窓口までお願いいたします。</p>
                    <p>[問い合わせ先情報]</p>
                    <p>sasaki_tatsuya@madoromi.co.jp</p>
                  </li>
                  <li>
                    <h2>ポリシーの変更</h2>
                    <p>本ポリシーは、必要に応じて改定されることがあります。変更があった場合は、弊社のウェブサイト上でお知らせいたします。</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative p-4 bg-gray-800 text-white">
        <h1 className="w-24 mx-auto">
          <Link href="/">
            <a
              className={classNames(
                'block w-full max-w-lg transition-opacity duration-1000 opacity-0',
                {
                  'opacity-100': show && scrollY > LOGO_HIDE_SCROLL,
                }
              )}
            >
              <Logo />
            </a>
          </Link>
        </h1>
        <p className="mt-4 text-center text-xs">
          Copyright &copy; 2021-2023 madoromi, Inc.
        </p>
      </footer>
    </Layout>
  );
};

export default IndexPage;
