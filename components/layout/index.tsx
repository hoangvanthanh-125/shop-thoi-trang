import React from 'react';
import { useAppSelector } from '../../redux/hook';
import FilterMobile from '../FilterMobile';
import Footer from '../Footer';
import HeaderSearch from '../Header/HeaderSearch';
import InfoUser from '../InfoUser';
import ModalCpn from '../modal';
import Overlay from '../overlay/overlay';
import Overlay2 from '../overlay/overlay2';
import SideBar from '../Sidebar';
import style from './../../styles/layout/header/Header.module.scss';
import styleLayout from './../../styles/layout/index.module.scss';
import Header from './../Header/index';

function LayOut({children,atHome}) {
  const { isOpenSearchMobile } = useAppSelector(state => state.uiReducer);
  return (
    <>
      <Header atHome={atHome} />
      <main className={styleLayout.main}>{children}</main>
      <Footer />
      <SideBar />
      <Overlay />
      <FilterMobile />
      <InfoUser />
      <ModalCpn  />
      <Overlay2 />
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