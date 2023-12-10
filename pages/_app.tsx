import "@/app/globals.css";
import { AppProps } from "next/app";
import { wrapper } from "../redux/wrapper";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../redux/authSlice";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  // This useEffect runs once when the component mounts
  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem("token");

    // If a token is found in local storage, dispatch the setToken action
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, []); // The empty dependency array ensures that this effect runs only once

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
