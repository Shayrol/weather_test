import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";
import PortfolioHeader from "../../units/MainProfilePageHead/mainProfileHead";

const LAYOUT_HIDDEN = ["/"];

export default function Layout({ children }) {
  const router = useRouter();
  const header = LAYOUT_HIDDEN.includes(router.asPath);
  const footer = LAYOUT_HIDDEN.includes(router.asPath);
  const portfolioHeader = LAYOUT_HIDDEN.includes(router.asPath);
  return (
    <div>
      {!header && <Header />}
      {/* {portfolioHeader && <PortfolioHeader />} */}
      <div>{children}</div>
      {!footer && <Footer />}
    </div>
  );
}
