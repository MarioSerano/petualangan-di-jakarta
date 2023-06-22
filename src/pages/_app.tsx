import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
import Head from "next/head";

import "@/styles/globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main style={{ minHeight: "100vh" }} className={leagueSpartan.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
