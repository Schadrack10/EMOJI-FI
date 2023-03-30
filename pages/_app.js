import "@/styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

import WebContextProvider from "@/context/WebContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <WebContextProvider>
        <Component {...pageProps} />
      </WebContextProvider>
    </main>
  );
}
