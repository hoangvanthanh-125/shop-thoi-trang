import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { listCart, listDanhmuc, listHeader } from "../../fakeData";
import style from "../../styles/layout/header/HeaderRight.module.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";

function HeaderRight(props) {
  const { isOpenSearchMobile } = useAppSelector((state) => state.uiReducer);
  const dispatch = useAppDispatch();
  const handleClickOpenSearch = () => {
    dispatch(uiActions.openSearchMobile());
    dispatch(uiActions.openOverlay());
  };
  return (
    <div className={style.header__right}>
      <ul>
        {listHeader.map((data, index) => (
          <li key={index}>
            <span> {data.name}</span>
            <div className={style.listDanhmuc}>
            {listDanhmuc.map((item,index) =><span key={index}>{item.name}</span> )}
            </div>
          </li>
        ))}
      </ul>
      <SearchIcon
        onClick={() => handleClickOpenSearch()}
        className={`${style.iconSearch} ${
          isOpenSearchMobile && style.iconSearchAppear
        }`}
      />
      <div className={style.wrapcart}>
        <ShoppingCartOutlinedIcon className={style.iconCart} />
        <div className={style.listCart}>
          {listCart.length > 0 ? (
            <div>
              <div className={style.listCart__header}>
                <p>Sản phẩm mới thêm</p>
              </div>
              <div className={style.listCart__body}>
                {listCart.map((item, index) => (
                  <div className={style.listCart__body__item} key={index}>
                    <div>
                      <img src={item.urlImg} alt="" />
                      <span>{item.name}</span>
                    </div>
                    <span className={style.price}>{item.price}</span>
                  </div>
                ))}
              </div>
              <div className={style.listCart__footer}>
                <span>100 thêm vào giỏ hàng</span>
                <button>Xem giỏ hàng</button>
              </div>
            </div>
          ) : (
            <div className={style.noCart}></div>
          )}
        </div>
      </div>
      <AccountCircleIcon className={style.iconAcc} />
    </div>
  );
}

export default HeaderRight;
