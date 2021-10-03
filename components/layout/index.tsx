import React from 'react';
import Footer from '../Footer';
import Overlay from '../overlay/overlay';
import SideBar from '../Sidebar';
import Header from './../Header/index'
import style from './../../styles/layout/header/Header.module.scss'
import { useAppSelector } from '../../redux/hook';
import HeaderSearch from '../Header/HeaderSearch';
import styleLayout from './../../styles/layout/index.module.scss'
import FilterMobile from '../FilterMobile';
import ScrollTop from '../ScrollTop';

function LayOut({children,atHome}) {
  const { isOpenSearchMobile } = useAppSelector(state => state.uiReducer)
  return (
    <>
      <Header atHome={atHome} />
      <main className={styleLayout.main}>{children}</main>
      <Footer />
      <SideBar />
      <Overlay />
      <FilterMobile />
      {/* <ScrollTop /> */}
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