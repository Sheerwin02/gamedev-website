import "@/app/globals.css";
import { AppProps } from "next/app";
import { wrapper } from "../redux/wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
