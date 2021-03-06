import { Avatar } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { showPrice } from "../../common/customPrice";
import { listDanhmuc, listHeader } from "../../fakeData";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import style from "../../styles/layout/header/HeaderRight.module.scss";
function HeaderRight(props) {
  const { isOpenSearchMobile } = useAppSelector((state) => state.uiReducer);
  const router = useRouter();
  const { asPath } = router;
  const dispatch = useAppDispatch();
  const { listCart } = useAppSelector((state) => state.cartReducer);
  const totalQuantityProduct = listCart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const handleClickOpenSearch = () => {
    dispatch(uiActions.openSearchMobile());
    dispatch(uiActions.openOverlay());
  };
  const handleOpenListColor = () => {
    dispatch(uiActions.openListColor());
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
  function active(path: string) {
    if (path === "/products" && asPath.indexOf("/products") >= 0) {
      return true;
    }
    return path === asPath;
  }
  const handleClickOpenInfoUser = () => {
    dispatch(uiActions.openUserInfo());
    dispatch(uiActions.openOverlay());
  };
  return (
    <div className={style.header__right}>
      <ul>
        {listHeader.map((data, index) => (
          <li className={active(data.path) ? style.itemHeaderActive : ""} key={index}>
            <span onClick={() => hancleClick(data.name)}> {data.name}</span>
            <div className={style.listDanhmuc}>
              {listDanhmuc.map((item, index) => (
                <Link key={index} href={`/products?type=${item.path}`} passHref>
                  <span
                    className={`${asPath == `/products?type=${item.path}` && style.danhmucActive}`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <SearchIcon
        onClick={() => handleClickOpenSearch()}
        className={`${style.iconSearch} ${isOpenSearchMobile && style.iconSearchAppear}`}
      />
      <div className={style.wrapcart}>
        <div
          style={{ position: "relative", zIndex: 1000000000000 }}
          onClick={() => router.push("/cart")}
        >
          <Badge badgeContent={totalQuantityProduct} color="secondary">
            <ShoppingCartOutlinedIcon className={style.iconCart} />{" "}
          </Badge>
        </div>

        <div className={style.listCart}>
          {listCart.length > 0 ? (
            <div>
              <div className={style.listCart__header}>
                <p>Sản phẩm mới thêm</p>
              </div>
              <div className={style.listCart__body}>
                {listCart.map((item, index) => (
                  <div
                    onClick={() =>
                      router.push(`/products/${item?.cartItem.id}/${item?.cartItem?.name}`)
                    }
                    className={style.listCart__body__item}
                    key={index}
                  >
                    <img src={item?.cartItem.listImg[0]} alt="" />
                    <div className={style.wrapInfoProduct}>
                      <div className={style.wrapNamePrice}>
                        <span className={style.name}>{item?.cartItem?.name}</span>
                        <span style={{ color: "red" }} className={style.price}>
                          {showPrice(item?.cartItem.price)}
                        </span>
                      </div>
                      <p className={style.size}>
                        Size : {item?.size}{" "}
                        <span className={style.quantity}>({item.quantity} sản phẩm )</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.listCart__footer}>
                <span>{totalQuantityProduct} thêm vào giỏ hàng</span>
                <button className="theme" onClick={() => router.push("/cart")}>
                  Xem giỏ hàng
                </button>
              </div>
            </div>
          ) : (
            <div className={style.noCart}></div>
          )}
        </div>
      </div>
      <div onClick={() => handleOpenListColor()} className={style.theme}></div>
      <div onClick={() => handleClickOpenInfoUser()}>
        <Avatar
          className={style.avatar}
          style={{ width: 25, height: 25, cursor: "pointer" }}
          src=""
        ></Avatar>
      </div>
    </div>
  );
}

export default HeaderRight;
