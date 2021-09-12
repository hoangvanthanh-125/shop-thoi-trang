import '../styles/globals.scss'
import Header from './../components/Header'
import Footer from './../components/Footer'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {wrapper} from "../redux/store"
import app, { AppContext } from 'next/app'
function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}
MyApp.getInitialProps = async (appContext:AppContext) => {
  const appProps = await app.getInitialProps(appContext);
  return {
    pageProps:{
      ...appProps.pageProps,
      
    }
  }
  
 }


export default wrapper.withRedux(MyApp)