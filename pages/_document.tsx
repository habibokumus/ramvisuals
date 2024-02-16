import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="no-scrollbar">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
