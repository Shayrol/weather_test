import Layout from "@/src/components/commons/layout";
import "@/styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>날씨 웹</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
