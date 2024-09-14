import Layout from "@/src/components/commons/layout";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
