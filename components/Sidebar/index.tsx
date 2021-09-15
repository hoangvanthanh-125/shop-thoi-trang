import React, { useState } from "react";
import style from "./../../styles/layout/Sidebar.module.scss";
import ClearIcon from "@material-ui/icons/Clear";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { listDanhmuc } from "../../fakeData";
import {useRouter} from 'next/router'
function SideBar() {
  const dispatch = useAppDispatch();
  const { isOpenSideBar } = useAppSelector((state) => state.uiReducer);
  const router = useRouter();
 const [isOpenListProduct,setOpenListProduct] = useState(false);
  const handleCloseSideBar = () => {
    dispatch(uiActions.closeSideBar());
    dispatch(uiActions.closeOverlay());
  };
const handleClickCategory = () => {
 router.push('/productCategory');
 dispatch(uiActions.closeSideBar());
 dispatch(uiActions.closeOverlay());
 
}
  return (
    <div
      className={`${style.sidebar} ${!isOpenSideBar && style.sidebar__hidden} `}
    >
      <div className={style.sidebar__head}>
        <div className={style.sidebar__head__logo}>
          <h3>ThannhShop</h3>
        </div>
        <ClearIcon
          onClick={() => handleCloseSideBar()}
          className={style.sidebar__head__icon}
        />
      </div>
      <div className={style.sidebar__body}>
        <div
          className={`${style.sidebar__body__item} ${style.sidebar__body__itemActive}`}
        >
          <div className={style.wrapDanhmuc}>
            <HomeIcon />
            <span>Trang chủ</span>
          </div>
        </div>
        <div  className={style.sidebar__body__item}>
          <div onClick={() => handleClickCategory()} className={style.wrapDanhmuc}>
            <ShoppingBasketIcon />
            <span >Sản phẩm</span>
          </div>

          <ExpandMoreIcon onClick={() => setOpenListProduct(!isOpenListProduct)} className={`${style.moreIcon} ${isOpenListProduct && style.moreIconOpen}`} />
        </div>
        <div className={`${style.listProduct} ${isOpenListProduct && style.listProductApear}`}>
          {listDanhmuc.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </div>
        <div className={style.sidebar__body__item}>
          <div className={style.wrapDanhmuc}>
            <ImportContactsIcon />
            <span>Giới thiệu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
