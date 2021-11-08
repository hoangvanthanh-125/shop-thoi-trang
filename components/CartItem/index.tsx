import { Card } from "@material-ui/core";
import React from "react";
import { CartType } from "../../types";
import style from "./../../styles/layout/Cart.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import router from "next/router";
import { showPrice } from "./../../common/customPrice";
interface CartItemProps {
  item: CartType;
  handleChangeCheckbox?: (item: CartType, checked: boolean) => void;
  updateCart?: (item: CartType, number: number) => void;
  hanldeDeleteCart?: (item: CartType) => void;
}
function CartItem({ item, handleChangeCheckbox, updateCart, hanldeDeleteCart }: CartItemProps) {
  const changeCheckBox = (e) => {
    if (handleChangeCheckbox) {
      handleChangeCheckbox(item, e.target.checked);
    }
  };
  const handleClickMovetoDetailProduct = () => {
    router.push(`/products/${item.cartItem.id}/${item.cartItem.name}`);
  };
  return (
    <Card className={style.wrapCartItem} key={item.id}>
      <div className={style.container__listCart__item}>
        <div className={style.item__left}>
          {handleChangeCheckbox && (
            <input
              type="checkbox"
              className={style.item__left__checkbox}
              onChange={changeCheckBox}
            />
          )}
          <div onClick={() => handleClickMovetoDetailProduct()} className={style.wrapInfoProduct}>
            <div className={style.wrapInfo}>
              <img className={style.item__left__img} src={item?.cartItem.listImg[0]} />
              <div className={style.item__left__info}>
                <p className={style.name}>{item?.cartItem.name}</p>
                <p className={style.size}>size:19</p>
                <p className={`${style.priceMobile} ${style.price}`}>
                  {showPrice(item?.cartItem.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.item__price}>
          <p className={style.title}>Giá</p>
          <p className={style.price}>{showPrice(item?.cartItem.price)}</p>
        </div>
        <div className={style.item__action}>
          <p className={style.title}>Số lượng</p>
          <div className={style.wrapButton}>
            {" "}
            <button className="theme" onClick={() => updateCart(item, -1)}>
              -
            </button>
            {item?.quantity}
            <button className="theme" onClick={() => updateCart(item, 1)}>
              +
            </button>
          </div>
        </div>
        <DeleteIcon onClick={() => hanldeDeleteCart(item)} className={style.iconDelete} />
      </div>
      <div className={style.item__total}>
        <p className={style.title}>Tổng cộng : </p>
        <p className={`${style.totalPrice} ${style.price}`}>
          {showPrice(item.cartItem.price * item.quantity)}
        </p>
      </div>
    </Card>
  );
}

export default CartItem;
