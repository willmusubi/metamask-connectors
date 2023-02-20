import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MoralisProvider } from "react-moralis";

export default function App({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
