import { Card, Grid } from "@material-ui/core";
import router from "next/router";
import React, { useState } from "react";
import CartItem from "../../components/CartItem";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { cartActions } from "../../redux/slice/cartSlice";
import { paymentAction } from "../../redux/slice/paymentSlice";
import { CartType } from "../../types";
import style from "./../../styles/layout/Cart.module.scss";
import Head from "next/head";
import { showPrice } from "../../common/customPrice";

function Cart({}) {
  const dispatch = useAppDispatch();
  const { listCart } = useAppSelector((state) => state.cartReducer);

  const [listCartPayment, setListCartPayment] = useState<CartType[]>([]);
  let totalMoney = 0;
  if (listCartPayment.length > 0) {
    totalMoney = listCartPayment.reduce((total, item) => {
      return total + item.cartItem.price * item.quantity;
    }, 0);
  }
  const hanldeDeleteCart = (pro: CartType) => {
    dispatch(cartActions.deleteCart(pro));
    const index = listCartPayment.findIndex((item) => item.id === pro.id);
    if (index >= 0) {
      const newList = listCartPayment.filter((item) => item.id !== pro.id);
      setListCartPayment(newList);
    }
  };
  const updateCart = (product: CartType, num: number) => {
    if (product.quantity === 1 && num === -1) {
      dispatch(cartActions.deleteCart(product));
    } else {
      dispatch(
        cartActions.updateCart({
          ...product,
          quantity: product.quantity + num,
        })
      );
    }
    const index = listCartPayment.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      const newList = [...listCartPayment];
      newList[index] = {
        ...product,
        quantity: product.quantity + num,
      };
      setListCartPayment(newList);
    }
  };
  const handleChangeCheckbox = (product: CartType, checked: boolean) => {
    const index = listCartPayment.findIndex((item) => item.id === product.id);
    if (checked === true) {
      if (index < 0) {
        setListCartPayment([...listCartPayment, product]);
      }
    } else {
      if (index >= 0) {
        const newListPayment = listCartPayment.filter((item) => item.id !== product.id);
        setListCartPayment(newListPayment);
      }
    }
  };
  const handleClickPayment = () => {
    if (listCartPayment.length === 0) {
      alert("Không có sản phẩm nào được chọn");
    } else {
      dispatch(paymentAction.fetchListPayment(listCartPayment));
      router.push("/payment");
    }
  };
  return listCart.length > 0 ? (
    <div className={style.cart}>
      <Head>
        <title>Giỏ hàng</title>
      </Head>
      <h2 className={style.cart__description}>Giỏ hàng của bạn</h2>
      <Grid container spacing={3} className={style.cart__container}>
        <Grid className={style.container__listCart} item md={9} sm={8} xs={12}>
          <div>
            {listCart.map((item) => (
              <CartItem
                updateCart={updateCart}
                hanldeDeleteCart={hanldeDeleteCart}
                handleChangeCheckbox={handleChangeCheckbox}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </Grid>
        <Grid className={style.container__payment} item md={3} sm={4} xs={12}>
          <Card className={style.payment}>
            <p className={`${style.payment__title} `}>Tổng tiền</p>
            <p className={`${style.payment__price} ${style.price}`}>{showPrice(totalMoney)}</p>
            <button onClick={() => handleClickPayment()} className={style.payment__action}>
              Thanh toán ngay
            </button>
          </Card>
        </Grid>
      </Grid>
      <div className={style.payment__mobile}>
        <div className={style.payment__mobile__left}>
          <p>
            Tổng tiền : <span className={style.price}>{showPrice(totalMoney)}</span>
          </p>
        </div>
        <div onClick={() => handleClickPayment()} className={style.payment__mobile__right}>
          Thanh toán
        </div>
      </div>
    </div>
  ) : (
    <div className={style.noCart}>
      <img src="/empty.png" style={{ width: 100, height: 100 }} />
      <h2 className={style.noCart__title}>Không có sản phẩm nào trong giỏ hàng</h2>
      <button onClick={() => router.push("/products")} className={style.noCart__button}>
        Tiếp tục mua sắm
      </button>
    </div>
  );
}
export default Cart;
