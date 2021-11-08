import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./../../styles/layout/Footer.module.scss";
interface Props {
  atCart: boolean;
}
function Footer({ atCart }: Props) {
  return (
    <div className={`${style.wrapFooter} ${atCart ? style.atCart : ""} theme`}>
      <div className={`${style.gridItemFooter}`}>
        <h3 className={style.title}>Hệ thống cửa hàng</h3>
        <p className={style.description}>Địa chỉ: Ngõ 105 Doãn Kế Thiện</p>
        <p className={style.description}>Số điện thoại:012345678</p>
        <p className={style.description}>Email: hihi@gmail.com</p>
      </div>
      <div className={style.gridItemFooter}>
        <h3 className={style.title}>Giờ mở cửa</h3>
        <p className={style.description}>
          Từ 8:00 - 22:00 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).
        </p>
      </div>
      <div className={style.gridItemFooter}>
        <h3 className={style.title}>Liên hệ trực tuyến</h3>
        <div className={style.wrapContact}>
          <FacebookIcon className={style.iconFb} />
          <InstagramIcon className={style.iconInsta} />
          <TwitterIcon className={style.iconTW} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
