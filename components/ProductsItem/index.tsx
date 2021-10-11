import { Card } from "@material-ui/core";
import style from "./../../styles/layout/ProductItem.module.scss";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Product } from "../../types";
import Link from "next/link";
import { StarsTwoTone } from "@material-ui/icons";
type PropsType = {
  product: Product;
};

function ProductItem({ product }: PropsType) {
  const { name, price, stars, sale, listImg, id } = product;
  let starTb = 0;
  if (stars.length > 0) {
    const total = stars.reduce((total, item) => {
      return (total += item);
    }, 0);
    starTb = Math.round(total / stars.length);
  }
  return (
    <Link href={`/products/${id}/${name}`}>
      <Card className={style.productItem}>
        <img className={style.img} src={listImg[0]} alt="loading" />
        <div className={style.rating}>
          {starTb > 0 ? (
            <Rating name="hover-feedback" value={starTb} />
          ) : (
            <p className={style.noRating}>Chưa có đánh giá</p>
          )}
        </div>
        <p className={style.nameProduct}>{name}</p>
        <div className={style.price}>
          <p className={style.price__real}>{price}đ</p>
          {sale > 0 && <p className={style.price__sale}>{price}đ</p>}
        </div>
        {sale > 0 && <div className={style.sale}></div>}
        {sale > 0 && <span className={style.sale__number}>{sale * 100}%</span>}
      </Card>
    </Link>
  );
}

export default ProductItem;
