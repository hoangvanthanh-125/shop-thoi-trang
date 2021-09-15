import React, { useState, useEffect } from "react";
import { listCarousel } from "../../fakeData";
import style from "./../../styles/layout/Carousel.module.scss";
import Slider from "react-slick";
import Head from "next/head";

function Carousel(props) {
  const [currentUrl, setCurentUrl] = useState(listCarousel[0].url);
  const settings = {
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
   
  };
  return (
    <div className={style.container}>
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
      <Slider className={style.slide} {...settings}>
       {listCarousel.map((item,index) => (
         <img key={index} src={item.url} className={style.box} />
       ) )}
      </Slider>
    </div>
  );
}

export default Carousel;
