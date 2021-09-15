import React from "react";
import style from "./../../styles/layout/Cart.module.scss";
import { listCart } from "./../../fakeData/index";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Card, Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

type CartType = {
  id: string;
  name: string;
  price: number;
  urlImg: string;
  size?: number;
  quantity?: number;
};
function Cart({
  list,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return list.length > 0 ? (
    <div className={style.cart}>
      <h2 className={style.cart__description}>Giỏ hàng của bạn</h2>
      <Grid container spacing={3} className={style.cart__container}>
        <Grid className={style.container__listCart} item md={8} sm={8} xs={12}>
          <div>
            {list.map((item) => (
              <Card key={item.id} className={style.container__listCart__item}>
                <div className={style.item__left}>
                  <input
                    type="checkbox"
                    className={style.item__left__checkbox}
                  />
                  <img className={style.item__left__img} src={item.urlImg} />
                  <div className={style.item__left__info}>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.size}>size:19</p>
                    <p className={style.priceMobile}>{item.price}</p>
                  </div>
                </div>
                <div className={style.item__price}>
                  <p className={style.title}>Giá</p>
                  <p>{item.price}</p>
                </div>
                <div className={style.item__action}>
                  <p className={style.title}>Số lượng</p>
                  <div>
                    {" "}
                    <button>-</button>
                    {10}
                    <button>+</button>
                  </div>
                </div>
                <div className={style.item__total}>
                  <p className={style.title}>Tổng cộng : </p>
                  <p className={style.totalPrice}>11111111</p>
                </div>
                <DeleteIcon className={style.iconDelete} />
              </Card>
            ))}
          </div>
        </Grid>
        <Grid className={style.container__payment} item md={4} sm={4} xs={12}>
          <Card className={style.payment}>
            <p className={style.payment__title}>Tổng tiền</p>
            <p className={style.payment__price}>1212121212</p>
            <button className={style.payment__action}>Thanh toán ngay</button>
          </Card>
        </Grid>
      </Grid>
      <div className={style.payment__mobile}>
        <div className={style.payment__mobile__left}>
          <p>Tổng tiền : 120w2w992</p>
        </div>
        <div className={style.payment__mobile__right}>Thanh toán</div>
      </div>
    </div>
  ) : (
    <div className={style.noCart}>
      <h2 className={style.noCart__title}>
        Không có sản phẩm nào trong giỏ hàng
      </h2>
      <button className={style.noCart__button}>Tiếp tục mua sắm</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const list: CartType[] = listCart;
  //call Api
  return {
    props: {
      list,
    },
  };
};
export default Cart;
