import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";
import { listCarousel } from "../../fakeData";
import style from "./../../styles/layout/Carousel.module.scss";
import snowStyle from "./../../styles/layout/Snow.module.scss";
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
              <h3 className={style.contact__slogan}>Xu h?????ng th???i trang</h3>
              <h2 className={style.contact__nameshop}>Th??nh Shop</h2>
              <p className={style.contact__description}>
                M???t trong nh???ng l?? do khi???n th???i trang tr??? th??nh m???t ph???n t???t y???u c???a cu???c s???ng b???i
                ????y ch??nh l?? l???a ch???n h??ng ?????u ????? ch??ng ta th??? hi???n ng??n ng??? ri??ng c???a ch??nh m??nh.
                C??ng nh?? con ng?????i, m???i thi???t k???, m???i ph??? ki???n hay m???i ph???n c???a th???i trang ?????u mang
                nh???ng c?? t??nh ri??ng, c??u chuy???n v?? m???t ?? ngh??a ri??ng. Do ????, ????? n??i l??n ti???ng n??i
                ri??ng c???a b???n th??n, nhi???u ng?????i l???a ch???n cho m??nh th???i trang nh?? m???t c??ch th??? hi???n.
              </p>
              <Link href="/products" passHref>
                <p className={style.contact__action}>Xem s???n ph???m</p>
              </Link>
            </div>
            <div className={style.contactMobile}>
              <div className={style.wrapContactMobile}>
                <h2 className={style.nameShop}>Th??nh Shop</h2>
                <p className={style.title}>Xu h?????ng th???i trang</p>
                <button onClick={() => router.push("/products")} className={style.action}>
                  Xem s???n ph???m
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
