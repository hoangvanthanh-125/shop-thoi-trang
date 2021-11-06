import React, { useState, useEffect } from "react";
import { listCarousel } from "../../fakeData";
import style from "./../../styles/layout/Carousel.module.scss";
import Slider from "react-slick";
import Head from "next/head";
import Link from "next/link";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import snowStyle from "./../../styles/layout/Snow.module.scss";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import router from "next/router";
export const renderSnow = () => {
  const snow = <div className={snowStyle.snow}></div>;
  const listSnow = [];
  for (let i = 0; i < 200; i++) {
    listSnow.push(snow);
  }
  return listSnow;
};
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
        {listCarousel.map((item, index) => (
          <div className={style.wrapBox} key={index}>
            <img src={item.url} className={style.box} />
            <div className={style.overlayBox}></div>
            <div className={style.wrapImg}>
              <img
                src="https://vcdn1-giaitri.vnecdn.net/2012/03/13/250tt3-1345820453.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=MKi1sBjyg6eeM_V_582J6w"
                className={style.imageCarosel}
              ></img>
              <img
                src="https://top.chon.vn/wp-content/uploads/2019/08/shop-do-vest-nam-4-250x150.jpg"
                className={`${style.imageCarosel} ${style.imageCarosel_1}`}
              ></img>
              <img
                src="https://vcdn1-giaitri.vnecdn.net/2010/10/27/thoitrangsp1-1345733177.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=oEykH0rUKNJliaB71gs4mg"
                className={`${style.imageCarosel} ${style.imageCarosel_2}`}
              ></img>
            </div>
            <div className={style.contact}>
              <h3 className={style.contact__slogan}>Xu hướng thời trang</h3>
              <h2 className={style.contact__nameshop}>Thành Shop</h2>
              <p className={style.contact__description}>
                Một trong những lý do khiến thời trang trở thành một phần tất yếu của cuộc sống bởi
                đây chính là lựa chọn hàng đầu để chúng ta thể hiện ngôn ngữ riêng của chính mình.
                Cũng như con người, mỗi thiết kế, mỗi phụ kiện hay mỗi phần của thời trang đều mang
                những cá tính riêng, câu chuyện và một ý nghĩa riêng. Do đó, để nói lên tiếng nói
                riêng của bản thân, nhiều người lựa chọn cho mình thời trang như một cách thể hiện.
              </p>
              <Link href="/products" passHref>
                <p className={style.contact__action}>Xem sản phẩm</p>
              </Link>
            </div>
            <div className={style.contactMobile}>
              <div className={style.wrapContactMobile}>
                <h2 className={style.nameShop}>Thành Shop</h2>
                <p className={style.title}>Xu hướng thời trang</p>
                <button onClick={() => router.push("/products")} className={style.action}>
                  Xem sản phẩm
                </button>
              </div>
            </div>
            {/* <ArrowRightIcon className={style.iconSnow} /> */}
            {}
            <div className={snowStyle.container}>{/* {renderSnow()} */}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
