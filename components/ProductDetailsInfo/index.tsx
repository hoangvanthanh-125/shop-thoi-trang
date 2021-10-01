import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import style from "./../../styles/layout/ProductDetailInfo.module.scss";
import { Product } from "../../types";
interface PropsType {
  product: Product;
}
function ProductDetailInfo({ product }: PropsType) {
  const { name, price, sale, star, listSize } = product;
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleChangeQuantity = (num) => {
    if (quantity + num !== 0) {
      setQuantity(quantity + num);
    }
  };
  return (
    <div className={style.info}>
      <div className={style.nameProduct}>
        <h2>{name}</h2>
      </div>
      <div className={style.parameter}>
        <div className={`${style.rating} ${style.parameter__item}`}>
          <span>{star} </span>
          <Rating
            className={style.rating__icon}
            name="hover-feedback"
            value={star}
          />
        </div>
        <div className={style.parameter__item}>10 đánh giá</div>
        <div className={style.parameter__item}>10 đã bán</div>
      </div>
      <div className={style.price}>
        {sale > 0 && <h2 className={`${style.price__real}`}>{price}</h2>}

        <h2 className={style.price__sale}>
          {Math.trunc(price - price * sale)}
        </h2>
      </div>
      <div className={style.size}>
        <p className={style.size__title}>Kích thước : </p>
        <div className={style.wrapListSize}>
          {listSize.map((item, index) => (
            <div
              onClick={() => setSize(item)}
              className={`${style.size__item} ${
                item === size && style.size__itemActive
              }`}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={style.quantity}>
        <p className={style.quantity__title}>Số lượng : </p>
        <div className={style.wrapChangeQuantity}>
          <div
            onClick={() => handleChangeQuantity(-1)}
            className={style.wrapChangeQuantity__item}
          >
            -
          </div>
          <div className={style.wrapChangeQuantity__item}>{quantity}</div>
          <div
            onClick={() => handleChangeQuantity(1)}
            className={style.wrapChangeQuantity__item}
          >
            +
          </div>
        </div>
      </div>
      <div className={style.action}>
      <div className={style.action__payment}>Mua ngay</div>
        <div className={style.action__addCart}>Thêm vào giỏ hàng</div>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
