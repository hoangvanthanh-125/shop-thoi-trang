import "../styles/globals.scss";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useRouter } from "next/router";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { wrapper } from "../redux/store";
import app, { AppContext } from "next/app";
import LayOut from "../components/layout";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { cartActions } from "../redux/slice/cartSlice";
import { listCart } from "../fakeData";
function MyApp({ Component, pageProps }) {
  const dispatch = useAppDispatch();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 741,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const router = useRouter();
  console.log(router.asPath);
  const atHome = router.asPath === "/";
  useEffect(() => {
    try {
      //all Api gio hang
      dispatch(cartActions.fetchAllCart(listCart));
    } catch (err) {
      alert(err.message);
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayOut atHome={atHome}>
          <Component {...pageProps} />
        </LayOut>
      </ThemeProvider>
    </>
  );
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await app.getInitialProps(appContext);
  return {
    pageProps: {
      ...appProps.pageProps,
    },
  };
};

export default wrapper.withRedux(MyApp);
