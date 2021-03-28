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
      </header>
      <main>
        <div>
          <div className="relative w-full h-screen sticky top-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen object-cover"
              poster="/kv_thumb.jpg"
            >
              <source src="/kv.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gray-900 opacity-60" />
            <div
              className={classNames(
                'absolute inset-0 flex justify-center items-center px-8 transition-opacity duration-1000 delay-500',
                {
                  'opacity-0': !show,
                  'opacity-100': show,
                }
              )}
            >
              <figure
                className={classNames(
                  'w-full max-w-lg mb-8 transition-opacity duration-1000',
                  {
                    'opacity-0': show && scrollY > LOGO_HIDE_SCROLL,
                    'opacity-90': show && scrollY <= LOGO_HIDE_SCROLL,
                  }
                )}
              >
                <Logo />
              </figure>
            </div>
          </div>
          <div className="relative w-full h-screen">
            <div className="max-w-screen-2xl mx-auto text-white p-4">
              <h1 className="text-2xl sm:text-3xl">
                <div className="w-32 sm:w-44 inline-block mr-2">
                  <Logo />
                </div>
                が目指す世界
              </h1>
              <div className="mt-8 text-md sm:text-xl sm:leading-loose">
                <p>まどろみのある豊かな世界。</p>
                <p className="mt-4">
                  春、桜を眺めながらまどろむ。
                  <br />
                  夏、浜辺に寝転んでまどろむ。
                  <br />
                  秋、夜風に吹かれてまどろむ。
                  <br />
                  冬、こたつの中でまどろむ。
                </p>
                <p className="mt-4">
                  madoromiは、エンジニアリングで本当の豊かさ追求します。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-screen sticky top-0">
            <img
              src="/bg01.jpg"
              className="block w-full h-screen object-cover"
            />
          </div>
          <div className="w-full h-screen sticky top-0">
            <div className="max-w-screen-2xl mx-auto text-white p-4">
              <h1 className="text-xl sm:text-3xl">
                <div className="w-32 sm:w-44 inline-block mr-2">
                  <Logo />
                </div>
                のエンジニアリング
              </h1>
              <div className="mt-8 text-md sm:text-xl sm:leading-loose">
                <p>
                  テクノロジーの力は強大です。
                  <br />
                  テクノロジーは、ひとを傷つける凶器になります。ひとを騙すための道具にもなります。
                  <br />
                  しかし、それ以上にテクノロジーは豊かさをもたらします。
                  <br />
                </p>
                <p className="mt-4">
                  この世界に透明性と公平性をもたらすことができれば、いまよりもずっとフェアに、個人が輝ける場所を提供できます。
                </p>
                <p className="mt-4">
                  退屈な仕事を圧縮することができれば、本当にやりたいことに注力できる時間を提供できます。
                </p>
                <p className="mt-4">
                  madoromiはテクノロジーをフェアに、そしてクリーンに扱います。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-screen sticky top-0">
            <img
              src="/bg02.jpg"
              className="block w-full h-screen object-cover"
            />
          </div>
          <div className="w-full h-screen sticky top-0">
            <div className="max-w-screen-2xl mx-auto text-white p-4">
              <h1 className="text-2xl sm:text-3xl">
                <div className="w-32 sm:w-44 inline-block mr-2">
                  <Logo />
                </div>
                の挑戦
              </h1>
              <div className="mt-8 text-md sm:text-xl sm:leading-loose">
                <p>こんな小さな会社に何ができるのかと思うかもしれません。</p>
                <p className="mt-4">
                  もちろん工夫は必要です。
                  <br />
                  しかし、テクノロジーの力は何倍にもスケールします。
                </p>
                <p className="mt-4">
                  そしてなにより、こんなに楽しい挑戦は他にありません。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-screen sticky top-0">
            <img
              src="/bg03.jpg"
              className="block w-full h-screen object-cover"
            />
          </div>
          <div className="w-full h-screen sticky top-0">
            <div className="max-w-screen-2xl mx-auto text-white p-4">
              <h1 className="text-2xl sm:text-3xl">会社概要</h1>
              <div className="mt-8 text-md sm:text-xl sm:leading-loose">
                <p>株式会社madoromi (madoromi, Inc.)</p>
                <p className="mt-4">
                  代表
                  <br />
                  代表取締役社長 佐々木達哉
                </p>
                <p className="mt-4">
                  本社所在地
                  <br />
                  〒150-0043
                  <br />
                  東京都渋谷区円山町10-18 マイキャッスル渋谷JP1003
                </p>
                <p className="mt-4">
                  お問い合わせ
                  <br />
                  <a href="mailto:sasaki_tatsuya@madoromi.co.jp">
                    sasaki_tatsuya@madoromi.co.jp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white">
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
          Copyright &copy; 20201 madoromi, Inc.
        </p>
      </footer>
    </Layout>
  );
};

export default IndexPage;
