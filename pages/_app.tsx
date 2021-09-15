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
function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 740,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const router = useRouter();
  console.log(router.asPath);
  const atHome = router.asPath === "/";
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
