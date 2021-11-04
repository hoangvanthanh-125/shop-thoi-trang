import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { paymentAction } from "../../redux/slice/paymentSlice";
import { CartType } from "../../types";
import CartItem from "../CartItem";
import style from "./../../styles/layout/paymentComponent/paymentList.module.scss";
import WatchIcon from "@material-ui/icons/Watch";
import { showPrice } from "../../common/customPrice";

function PaymentList(props) {
  const dispatch = useAppDispatch();
  const { listPayment } = useAppSelector((state) => state.paymentReducer);
  let totalMoney = 0;
  if (listPayment.length > 0) {
    totalMoney = listPayment.reduce((total, item) => {
      return total + item.cartItem.price * item.quantity;
    }, 0);
  }
  useEffect(() => {
    return () => {
      dispatch(paymentAction.fetchListPayment([]));
    };
  }, []);
  const updatePayment = (product: CartType, num) => {
    if (product.quantity === 1 && num === -1) {
      dispatch(paymentAction.deletePayment(product));
    } else {
      dispatch(
        paymentAction.updatePayment({
          ...product,
          quantity: product.quantity + num,
        })
      );
    }
  };
  const hanldeDeletePaymentItem = (pro: CartType) => {
    dispatch(paymentAction.deletePayment(pro));
  };
  return (
    <div className={style.wrapListPayment}>
      <div className={style.paymentHeader}>
        <WatchIcon />
        <h2 className={style.title}>Đơn hàng của bạn</h2>
      </div>
      <div className={style.paymentTotalPrice}>
        <h3>
          Tổng tiền : <span style={{ color: "red" }}>{showPrice(totalMoney)}</span>{" "}
        </h3>
      </div>
      <div className={style.paymentBody}>
        {listPayment.map((item: CartType) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              updateCart={updatePayment}
              hanldeDeleteCart={hanldeDeletePaymentItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PaymentList;
