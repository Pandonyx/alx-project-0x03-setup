import Header from "@/components/layouts/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Header />
  <Component {...pageProps} />;
  <Footer />
  </>
  )
}
