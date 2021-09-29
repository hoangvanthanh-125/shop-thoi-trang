import { Grid } from "@material-ui/core";
import React from "react";
import { Product } from "../../types";
import style from './../../styles/layout/ProductDetails.module.scss';
import Slider from "react-slick";
import Head from 'next/head';
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'react__slick__slider__parent', 
};

type PropsType = {
  product: Product;
};

function ProductDetails({ product }: PropsType) {
  const {listImg} = product;

  return <div className={style.wrapDetailProduct}>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div className={style.wrap}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className={style.lol}>
            1
          </div>
          <div className={style.lol}>
            <h3>1</h3>
          </div>
          <div className={style.lol}>
            <h3>1</h3>
          </div>
          <div className={style.lol}>
            <h3>1</h3>
          </div>
          <div className={style.lol}>
            <h3>1</h3>
          </div>
        </Slider>
      </div>
    <Grid container>
      <Grid item md={8} xs={12} sm={12}>
     
      </Grid>
    <Grid item md={4} xs={4} sm={4}>

    </Grid>

</Grid>
  </div>;
}

export default ProductDetails;
