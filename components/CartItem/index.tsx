import { Card } from "@material-ui/core";
import React from "react";
import { CartType } from "../../types";
import style from "./../../styles/layout/Cart.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";

interface CartItemProps {
  item: CartType;
  handleChangeCheckbox?: (item: CartType, checked: boolean) => void;
  updateCart?: (item: CartType, number: number) => void;
  hanldeDeleteCart?: (item: CartType) => void;
}
function CartItem({
  item,
  handleChangeCheckbox,
  updateCart,
  hanldeDeleteCart,
}: CartItemProps) {
  const changeCheckBox = (e) => {
    if (handleChangeCheckbox) {
      handleChangeCheckbox(item, e.target.checked);
    }
  };
  return (
    <Card key={item.id} className={style.container__listCart__item}>
      <div className={style.item__left}>
        {handleChangeCheckbox && (
          <input
            type="checkbox"
            className={style.item__left__checkbox}
            onChange={changeCheckBox}
          />
        )}
        <img
          className={style.item__left__img}
          src={item?.cartItem.listImg[0]}
        />
        <div className={style.item__left__info}>
          <p className={style.name}>{item?.cartItem.name}</p>
          <p className={style.size}>size:19</p>
          <p className={style.priceMobile}>{item?.cartItem.price}</p>
        </div>
      </div>
      <div className={style.item__price}>
        <p className={style.title}>Giá</p>
        <p>{item?.cartItem.price}</p>
      </div>
      <div className={style.item__action}>
        <p className={style.title}>Số lượng</p>
        <div>
          {" "}
          <button onClick={() => updateCart(item, -1)}>-</button>
          {item?.quantity}
          <button onClick={() => updateCart(item, 1)}>+</button>
        </div>
      </div>
      <div className={style.item__total}>
        <p className={style.title}>Tổng cộng : </p>
        <p className={style.totalPrice}>
          {item.cartItem.price * item.quantity}
        </p>
      </div>
      <DeleteIcon
        onClick={() => hanldeDeleteCart(item)}
        className={style.iconDelete}
      />
    </Card>
  );
}

export default CartItem;
