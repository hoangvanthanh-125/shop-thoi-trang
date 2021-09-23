import { Card } from "@material-ui/core";
import style from "./../../styles/layout/ProductItem.module.scss";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Product } from "../../types";
type PropsType = {
  product: Product;
};

function ProductItem({ product }: PropsType) {
  const { name, price, star, sale, listImg } = product;
  return (
    <Card className={style.productItem}>
      <img className={style.img} src={listImg[0]} alt="loading" />
      <div className={style.rating}>
        <Rating name="hover-feedback" value={star} />
      </div>
      <p className={style.nameProduct}>{name}</p>
      <div className={style.price}>
        <p className={style.price__real}>{price}đ</p>
        <p className={style.price__sale}>{price}đ</p>

      </div>
    </Card>
  );
}

export default ProductItem;
