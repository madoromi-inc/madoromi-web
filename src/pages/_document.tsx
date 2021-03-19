import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
