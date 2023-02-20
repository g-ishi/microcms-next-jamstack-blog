import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { googleTagManagerId } from '../utils/gtm';
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../components/GoogleTagManager';
import Layout from 'components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
