import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { listCart, listDanhmuc, listHeader } from "../../fakeData";
import style from "../../styles/layout/header/HeaderRight.module.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import { useRouter } from "next/router";
import Badge from "@material-ui/core/Badge";

function HeaderRight(props) {
  const { isOpenSearchMobile } = useAppSelector((state) => state.uiReducer);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { listCart } = useAppSelector(state => state.cartReducer)
  const handleClickOpenSearch = () => {
    dispatch(uiActions.openSearchMobile());
    dispatch(uiActions.openOverlay());
  };
  const hancleClick = (name: string) => {
    if (name === "Sản phẩm") {
      router.push("/products");
    }
    if (name === "Trang chủ") {
      router.push("/");
    }
  };
  return (
    <div className={style.header__right}>
      <ul>
        {listHeader.map((data, index) => (
          <li onClick={() => hancleClick(data.name)} key={index}>
            <span> {data.name}</span>
            <div className={style.listDanhmuc}>
              {listDanhmuc.map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}
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
        <Badge badgeContent={listCart?.length} color="primary">
          <ShoppingCartOutlinedIcon
            onClick={() => router.push("/cart")}
            className={style.iconCart}
          />{" "}
        </Badge>

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
                      <img src={item?.cartItem.urlImg} alt="" />
                      <span>{item?.cartItem?.name}</span>
                    </div>
                    <span className={style.price}>{item?.cartItem.price}</span>
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
