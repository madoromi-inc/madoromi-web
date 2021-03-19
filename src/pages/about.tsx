import React from 'react';
import { Layout } from '@src/components/Layout';

const AboutPage: React.FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className="p-4">
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  </Layout>
);

export default AboutPage;
