import type { AppProps } from 'next/app';
import Script from 'next/script';
import { googleTagManagerId } from '../utils/gtm';
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../components/GoogleTagManager';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* TODO: GoogleAnalyticsのシークレットを別ファイルにして管理する */}
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PFQVZ1KBWR"
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'G-PFQVZ1KBWR', {
              page_path: window.location.pathname,
            })`,
        }}
      /> */}
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Component {...pageProps} />
    </>
  );
}
