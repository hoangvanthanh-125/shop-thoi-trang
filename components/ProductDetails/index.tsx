import { Grid } from "@material-ui/core";
import React from "react";
import { CommentItem, Product } from "../../types";
import style from "./../../styles/layout/ProductDetails.module.scss";
import Slider from "react-slick";
import Head from "next/head";
import ProductDetailInfo from "../ProductDetailsInfo";
import { StyledEngineProvider } from "@mui/styled-engine";
import CommentProduct from "../CommentProduct";

type PropsType = {
  product: Product,
  listComment:CommentItem[],
};

function ProductDetails({ product,listComment }: PropsType) {
  const { listImg, name, price, sale, stars,description } = product;
  let starTb = 0;

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.wrapDetailProduct}>
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
      <Grid container>
        <Grid item md={5} xs={12} sm={5}>
          <Slider {...settings}>
            {listImg.map((item, index) => (
              <div className={style.wrapImgItem} key={index}>
                <img
                  className={style.imgItem}
                  src={item}
                  key={index}
                  alt="Loading..."
                />
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid item md={7} xs={12} sm={7}>
         <ProductDetailInfo product = {product} />
        
        </Grid>
      </Grid>
      <div className = {style.description}>
        <h2 className={style.description__title}>Mô tả sản phẩm</h2>
           <p className={style.description__content}>{description}</p>
      </div>
      <div>
        <CommentProduct listComment={listComment} />
      </div>
    </div>
  );
}

export default ProductDetails;
