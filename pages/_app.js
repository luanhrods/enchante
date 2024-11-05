import Head from 'next/head';
import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LC Studio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
