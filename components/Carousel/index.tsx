import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import { listCarousel } from '../../fakeData';
import style from './../../styles/layout/Carousel.module.scss'
function Carousel(props) {
  const [currentUrl,setCurentUrl] = useState(listCarousel[0].url);
  // useEffect(() => {
  //  const timeOut = setTimeout(() => {
  //    const length = listCarousel.length;
     
  //    const index = listCarousel.findIndex(item => item.url === currentUrl);
     
  //    if(index === length - 1){
       
  //      setCurentUrl(listCarousel[0].url);
  //    }
  //    else {
  //      setCurentUrl(listCarousel[index + 1].url)
  //    }

  //    setCurentUrl

  //  },5000)
  //   return () => {
  //     clearTimeout(timeOut);
  //   }
  // }, [currentUrl])
  return (
    
    <div className={style.carousel} style={{background:`url(${currentUrl})`,backgroundSize:'contain',backgroundPosition:'center center',backgroundRepeat:'repeat'}} >
     
    </div>
  );
}

export default Carousel;