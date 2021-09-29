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
import { useRouter } from "next/router";
import Link from "next/link";
function SideBar() {
  const dispatch = useAppDispatch();
  const { isOpenSideBar } = useAppSelector((state) => state.uiReducer);
  const router = useRouter();
  const { asPath } = router;
  const [isOpenListProduct, setOpenListProduct] = useState(false);
  const atProductType = asPath.indexOf("type") >= 0;

  const handleCloseSideBar = () => {
    dispatch(uiActions.closeSideBar());
    dispatch(uiActions.closeOverlay());
  };

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
        <Link href="/" passHref>
          <div
            onClick={() => handleCloseSideBar()}
            className={`${style.sidebar__body__item} ${
              asPath === "/" && style.sidebar__body__itemActive
            }`}
          >
            <div className={style.wrapDanhmuc}>
              <HomeIcon />
              <span>Trang chủ</span>
            </div>
          </div>
        </Link>
        <div
          className={`${style.sidebar__body__item} ${
            asPath === "/products" && style.sidebar__body__itemActive
          }`}
        >
          <Link href="/products" passHref>
            <div
              onClick={() => handleCloseSideBar()}
              className={style.wrapDanhmucSP}
            >
              <ShoppingBasketIcon />
              <span>Sản phẩm</span>
            </div>
          </Link>

          <div
            onClick={() => setOpenListProduct(!isOpenListProduct)}
            className={style.wrapMoreIcon}
          >
            <ExpandMoreIcon
              className={`${style.moreIcon} ${
                (atProductType || isOpenListProduct) && style.moreIconOpen
              }`}
            />
          </div>
        </div>
        <div
          className={`${style.listProduct} ${
            (atProductType || isOpenListProduct) && style.listProductApear
          }`}
        >
          {listDanhmuc.map((item, index) => {
            return (
              <Link key={index} href={`/products?type=${item.path}`} passHref>
                <li
                  onClick={() => handleCloseSideBar()}
                  style={{
                    fontWeight:
                      asPath === `/products?type=${item.path}`
                        ? "bold"
                        : "normal",
                  }}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </div>
        <div
          onClick={() => handleCloseSideBar()}
          className={style.sidebar__body__item}
        >
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
