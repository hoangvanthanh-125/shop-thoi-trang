import React from "react";
import PropTypes from "prop-types";
import style from "./../../styles/layout/InfoUserWithAuth.module.scss";
import { Avatar } from "@material-ui/core";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import FormChangePassWord from "../FormChangePassword";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import FormChangeNameUser from "../FormChangeNameUser";
import { useRouter } from "next/router";

function UserInfoWithAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClickChangePass = () => {
    dispatch(uiActions.openModal());
    dispatch(uiActions.openOverlay2());
    dispatch(uiActions.fetchHeadModal("Đổi mật khẩu"));
    dispatch(uiActions.fetchBodyModal(<FormChangePassWord />));
  };
  const handleClickOpenModalChangeNameUser = () => {
    dispatch(uiActions.openOverlay2());
    dispatch(uiActions.openModal());
    dispatch(uiActions.fetchHeadModal("Đổi tên"));
    dispatch(uiActions.fetchBodyModal(<FormChangeNameUser />));
  };
  const handleClickHistory = () => {
    router.push("/history");
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeUserInfo());
  };
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <Avatar className={style.avatarIcon} src="">
          T
        </Avatar>
        <label className={`${style.inputFile} theme`} htmlFor="inputFile">
          <CameraAltOutlinedIcon />
          <p className={style.title}>Tải ảnh lên</p>
        </label>
        <input id="inputFile" type="file" hidden />
      </div>
      <div>
        <div className={`${style.wrapItem} ${style.wrapNameUser}`}>
          <div className={style.nameUser}>
            <AccountCircleOutlinedIcon />
            <p className={style.titleItem}>Hoàng văn Thành</p>
          </div>
          <EditOutlinedIcon
            onClick={() => handleClickOpenModalChangeNameUser()}
            className={style.editNameUser}
          />
        </div>
        <div className={style.wrapItem}>
          <EmailOutlinedIcon />
          <p className={style.titleItem}>thanh@gmail.com</p>
        </div>
        <div onClick={() => handleClickHistory()} className={style.wrapItem}>
          <ShoppingCartOutlinedIcon />
          <p className={style.titleItem}>Lịch sử mua hàng</p>
        </div>
        <div onClick={() => handleClickChangePass()} className={style.wrapItem}>
          <VpnKeyOutlinedIcon />
          <p className={style.titleItem}>Đổi mật khẩu</p>
        </div>
        <div onClick={() => router.push("/auth?type=login")} className={style.wrapItem}>
          <ExitToAppOutlinedIcon />
          <p className={style.titleItem}>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfoWithAuth;
