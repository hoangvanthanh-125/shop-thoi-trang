import React from "react";
import { useAppSelector } from "../../redux/hook";
import FilterMobile from "../FilterMobile";
import Footer from "../Footer";
import HeaderSearch from "../Header/HeaderSearch";
import InfoUser from "../InfoUser";
import ModalCpn from "../modal";
import Overlay from "../overlay/overlay";
import Overlay2 from "../overlay/overlay2";
import ScrollTop from "../ScrollTop";
import SideBar from "../Sidebar";
import ThemeColor from "../ThemeColor";
import style from "./../../styles/layout/header/Header.module.scss";
import styleLayout from "./../../styles/layout/index.module.scss";
import Header from "./../Header/index";
interface Props {
  handleChangedThemeColor?: (color: string) => void;
  atHome: boolean;
  atCart: boolean;
  children: any;
  themeColor: string;
}

function LayOut({ children, atHome, atCart, handleChangedThemeColor, themeColor }: Props) {
  const { isOpenSearchMobile } = useAppSelector((state) => state.uiReducer);
  return (
    <>
      <Header atHome={atHome} />
      <main className={styleLayout.main}>{children}</main>
      <Footer atCart={atCart} />
      <SideBar />
      <Overlay />
      <FilterMobile />
      <InfoUser />
      <ModalCpn />
      <Overlay2 />
      <ScrollTop />
      <ThemeColor themeColor={themeColor} handleChangedThemeColor={handleChangedThemeColor} />
      <div
        className={`${style.header__searchMobile} ${
          !isOpenSearchMobile && style.header__searchMobileAppear
        }`}
      >
        <HeaderSearch />
      </div>
    </>
  );
}

export default LayOut;
