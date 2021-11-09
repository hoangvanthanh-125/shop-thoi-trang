import React, { useState } from "react";
import style from "./../../styles/layout/header/Header.module.scss";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { uiActions } from "../../redux/slice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import HeaderSearch from "./HeaderSearch";
import { listHeader } from "../../fakeData";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HeaderRight from "./HeaderRight";
import router from "next/router";
interface PropsType {
  atHome: boolean;
}
function Header({ atHome }: PropsType) {
  const { isOpenSideBar, isOpenSearchMobile } = useAppSelector((state) => state.uiReducer);
  const dispatch = useAppDispatch();
  const [colorHeader, setColorHeader] = useState(false);
  const handleOpenSideBar = () => {
    dispatch(uiActions.openSideBar());
    dispatch(uiActions.openOverlay());
  };

  return (
    <div
      id="header"
      className={`${style.header} ${colorHeader && atHome && style.headerColor} ${
        !atHome && style.headerNoAtHome
      } `}
    >
      <div className={style.header__left}>
        <DehazeIcon className={style.iconBar} onClick={() => handleOpenSideBar()} />
        <div onClick={() => router.push("/")} className={style.logo}>
          <img className={style.imgLogo} src="/logo.jpg" />
        </div>
      </div>
      <div className={style.header__middle}>
        <HeaderSearch />
      </div>
      <HeaderRight />
    </div>
  );
}

export default Header;
