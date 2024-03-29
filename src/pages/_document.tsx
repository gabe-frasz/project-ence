import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* open graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ence Studio" />
        <meta
          property="og:description"
          content="Estúdio de design focado na criação e desenvolvimento de Identidade de marca e UI Design. criado para transformar a experiência de projetos."
        />
        <meta property="og:site_name" content="Ence Studio - Portfólio" />
        <meta property="og:url" content="https://encestudio.com" />
        <meta
          property="og:image"
          content="https://encestudio.com/facebook-banner.png"
        />
        <meta name="author" content="João Vitor Nascimento" />

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://encestudio.com" />
        <meta name="twitter:title" content="Ence Studio" />
        <meta
          name="twitter:description"
          content="Estúdio de design focado na criação e desenvolvimento de Identidade de marca e UI Design. criado para transformar a experiência de projetos."
        />
        <meta name="twitter:creator" content="@joaovitorn___" />
        {/* <meta name="twitter:image" content="https://encestudio.com/twitter-banner.png" /> */}

        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="shortcut icon"
          href="/favicon-32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="shortcut icon"
          href="/favicon-96.png"
          type="image/png"
          sizes="96x96"
        />
        <link
          rel="shortcut icon"
          href="/favicon-152.png"
          type="image/png"
          sizes="152x152"
        />
        <link
          rel="shortcut icon"
          href="/favicon-167.png"
          type="image/png"
          sizes="167x167"
        />
        <link
          rel="shortcut icon"
          href="/favicon-180.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="/touch-icon.png"
          type="image/png"
          sizes="57x57"
        />

        <meta name="theme-color" content="#000" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />

        <script
          async
          defer
          data-website-id="9ccc64a9-2c65-41ed-bca6-51c1680e8d6a"
          src="https://umami-analytics-omega.vercel.app/umami.js"
        />
      </Head>

      <body className="min-h-screen overflow-x-hidden bg-base-300 text-base-content">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
