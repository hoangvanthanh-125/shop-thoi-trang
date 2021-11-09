import { Card } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import { showPrice } from "../../common/customPrice";
import { CartType, OrderProduct } from "../../types";
import style from "./../../styles/layout/Cart.module.scss";
import style2 from "./../../styles/layout/OrderItem.module.scss";

interface OrderProps {
  item: CartType;
  status: "delivering" | "received" | "cancelled";
  labelButton: string;
  handleAction: (product: OrderProduct) => void;
  orderProduct: OrderProduct;
  handleCancelled?: (product: OrderProduct) => void;
}
function OrderItem({
  item,
  status,
  labelButton,
  handleAction,
  orderProduct,
  handleCancelled,
}: OrderProps) {
  const router = useRouter();
  const handleClickButton = () => {
    if (handleAction) {
      handleAction(orderProduct);
    }
  };
  const cancelOrderProduct = () => {
    if (handleCancelled) {
      handleCancelled(orderProduct);
    }
  };
  const handleClickMovetoDetailProduct = () => {
    router.push(`/products/${item.cartItem.id}/${item.cartItem.name}`);
  };
  return (
    <Card key={item.id} className={style2.orderItem}>
      <div className={`${style.container__listCart__item} ${style2.infoProduct}`}>
        <div className={style.item__left}>
          <div onClick={() => handleClickMovetoDetailProduct()} className={style.wrapInfoProduct}>
            <img className={style.item__left__img} src={item?.cartItem.listImg[0]} />
            <div className={style.item__left__info}>
              <p className={style.name}>{item?.cartItem.name}</p>
              <p className={style.size}>size:19</p>
            </div>
          </div>
        </div>
        <div className={style.item__price}>
          <p className={style.title}>Giá</p>
          <p style={{ color: "red" }}>{showPrice(item?.cartItem.price)}</p>
        </div>
        <div className={style.item__action}>
          <p className={style.title}>Số lượng</p>
          <div>{item?.quantity}</div>
        </div>
      </div>
      <div className={style2.wrapActionTotal}>
        <div className={style2.total}>
          <p className={style.title}>Tổng cộng : </p>
          <p style={{ color: "red" }} className={style.totalPrice}>
            {showPrice(item.cartItem.price * item.quantity)}
          </p>
        </div>
        <div className={style2.action}>
          <button
            onClick={() => handleClickButton()}
            className={`${style2.buttonAction} ${
              status === "delivering" ? style2.actionDelivering : ""
            }`}
          >
            {labelButton}
          </button>
          {status === "delivering" && (
            <button
              onClick={() => cancelOrderProduct()}
              className={`${style2.buttonAction} ${style2.buttonAtDelivering}`}
            >
              Hủy đơn
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default OrderItem;
