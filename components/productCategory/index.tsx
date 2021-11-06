import { Grid } from "@material-ui/core";
import React from "react";
import { listDanhmuc } from "../../fakeData";
import style from "./../../styles/layout/ProductCategory.module.scss";
import Link from "next/link";

function ProductCategory() {
  return (
    <div className={style.wrapProductCategory}>
      <div className={style.wrapProductCategory__title}>
        <h2 className={style.wrapProductCategory__title__content}>Danh mục sản phẩm</h2>
      </div>
      <Grid container spacing={0} className={style.wrapProductCategory__container}>
        {listDanhmuc.map((item, index) => (
          <Link key={index} href={`/products?type=${item.path}`} passHref>
            <Grid className={style.wrapProductCategory__container__item} item xs={6} md={4} sm={6}>
              <div className={style.img} style={{ background: `url(${item.url})` }}>
                <div className={style.overlay}></div>
              </div>
              <button>{item.name}</button>
            </Grid>
          </Link>
        ))}
      </Grid>
    </div>
  );
}

export default ProductCategory;
