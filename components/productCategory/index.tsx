import {
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { listDanhmuc } from "../../fakeData";
import style from "./../../styles/layout/ProductCategory.module.scss";
import Head from "next/head";
import Card from "@material-ui/core/Card";

function ProductCategory() {
  return (
    <div className={style.wrapProductCategory}>
      <div className={style.wrapProductCategory__title}>
        <h2 className={style.wrapProductCategory__title__content}>
          Danh mục sản phẩm
        </h2>
      </div>
      <Grid
        container
        spacing={0}
        className={style.wrapProductCategory__container}
      >
        {listDanhmuc.map((item, index) => (
          <Grid
            className={style.wrapProductCategory__container__item}
            key={index}
            item
            xs={6}
            md={4}
            sm={6}
          >
          
            <div
              className={style.img}
              style={{ background: `url(${item.url})` }}
            >
              <div className={style.overlay}></div>
            </div>
            <button>{item.name}</button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductCategory;
