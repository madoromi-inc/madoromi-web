import React from 'react';
import { Layout } from '@src/components/Layout';
import { Logo } from '@src/components/Logo';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="relative w-full h-screen sticky top-0 bg-red-500">
          <video
            autoPlay
            muted
            loop
            className="w-full h-screen object-cover"
            playsInline={true}
          >
            <source src="/bg01.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
          <div className="absolute inset-0 flex justify-center items-center px-8">
            <figure className=" w-full max-w-lg mb-8 opacity-90">
              <Logo />
            </figure>
          </div>
        </div>
        <div className="relative w-full h-screen">
          <div className="max-w-screen-2xl mx-auto text-white">
            <h1>テキスト</h1>
            <div>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-screen sticky top-0 bg-yellow-500">
          <img src="/bg01.jpg" className="block w-full h-screen object-cover" />
        </div>
        <div className="w-full h-screen sticky top-0">
          <div className="max-w-screen-2xl mx-auto text-white">
            <h1>テキスト</h1>
            <div>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/bg02.jpg" className="block w-full h-screen object-cover" />
      </div>
      <div className="w-full h-screen bg-gray-500">
        <div className="max-w-screen-2xl mx-auto text-white">
          <h1>テキスト</h1>
          <div>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
