import React, { useState } from "react";
import style from "./../../styles/layout/ScrollTop.module.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function ScrollTop(props) {
  const [scroll, setScroll] = useState(false);
  const handleClickScroll = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
  if (typeof window !== "undefined") {
    const changeColorHeader = () => {
      if (window.scrollY > 74) {
        setScroll(true);
      } else setScroll(false);
    };
    window.addEventListener("scroll", changeColorHeader);
  }
  return (
    <div
      onClick={() => handleClickScroll()}
      className={`${style.scroll} ${!scroll && style.scrollHidden} theme`}
    >
      <ArrowForwardIosIcon className={style.icon} />
    </div>
  );
}

export default ScrollTop;
