import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link
          href="/favicon.ico"
          rel="shortcut icon"
          type="image/ico"
          sizes="16x16"
        />

        <meta name="theme-color" content="#22223B" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />

        {/*
          // icons
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />

          // apple-touch icons
          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

          // opengraph meta tags
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="Next.js template with bash scripts" />
          <meta name="twitter:description" content="Best Next.js template with bash scripts in the world" />
          <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
          <meta name="twitter:creator" content="@John_Doe" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Next.js template with bash scripts" />
          <meta property="og:description" content="Best Next.js template with bash scripts in the world" />
          <meta property="og:site_name" content="Next.js template with bash scripts" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
        */}
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
