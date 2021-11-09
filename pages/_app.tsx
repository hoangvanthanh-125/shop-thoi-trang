import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import app, { AppContext } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LayOut from "../components/layout";
import { listCart, listColor } from "../fakeData";
import { useAppDispatch } from "../redux/hook";
import { cartActions } from "../redux/slice/cartSlice";
import { wrapper } from "../redux/store";
import "../styles/globals.scss";
import "../styles/nprogress.scss";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";
import { isFulfilled } from "@reduxjs/toolkit";

function MyApp({ Component, pageProps }) {
  const dispatch = useAppDispatch();
  const [themeColor, setThemeColor] = useState(listColor[0]);
  const { list } = pageProps;
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
  const atHome = router.asPath === "/";
  const atCart = router.asPath === "/cart";
  const listNotLayOut = ["/auth"];
  const isNotLayOut = listNotLayOut.includes(router.pathname);
  const handleChangedThemeColor = (color: string) => {
    setThemeColor(color);
  };
  useEffect(() => {
    console.log("App chay");

    if (typeof document !== undefined && typeof window !== undefined) {
      const theme = document.querySelectorAll<HTMLElement>(".theme");
      for (let i = 0; i < theme.length; i++) {
        theme[i].style.background = themeColor;
      }
      const header = document.getElementById("header");
      if (atHome) {
        console.log("Taij home");

        header.style.background = "transparent";
        var changeColorHeader = () => {
          if (window.scrollY > 74) {
            header.style.background = themeColor;
          } else {
            header.style.background = "transparent";
          }
        };
        window.addEventListener("scroll", changeColorHeader);
      } else {
        header.style.background = themeColor;
        console.log("ko taij hoem");
      }
    }
    return () => {
      window.removeEventListener("scroll", changeColorHeader);
    };
  }, [themeColor, router.asPath]);
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    try {
      //all Api gio hang
      dispatch(cartActions.fetchAllCart(listCart));
    } catch (err) {
      alert(err.message);
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", (url) => {
      NProgress.done();
    });
    router.events.on("routeChangeError", (url) => {
      NProgress.done();
    });
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        {!isNotLayOut ? (
          <LayOut
            themeColor={themeColor}
            handleChangedThemeColor={handleChangedThemeColor}
            atCart={atCart}
            atHome={atHome}
          >
            <Component {...pageProps} />
          </LayOut>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
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
