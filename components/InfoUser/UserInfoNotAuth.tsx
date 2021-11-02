import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import style from "./../../styles/layout/infoUserNotAuth.module.scss";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useRouter } from "next/router";
function UserInfoNotAuth(props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleClickMoveLogin = () => {
    router.push("/auth?type=login");
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeUserInfo());
  };
  const handleClickMoveRegister = () => {
    router.push("/auth?type=register");
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeUserInfo());
  };
  return (
    <div className={style.notAuth}>
      <div onClick={() => handleClickMoveLogin()} className={style.wrapLogin}>
        <AccountCircleIcon />
        <p className={style.title}>Đăng nhập</p>
      </div>
      <div onClick={() => handleClickMoveRegister()} className={style.wrapLogin}>
        <VpnKeyIcon />
        <p className={style.title}>Đăng kí</p>
      </div>
    </div>
  );
}

export default UserInfoNotAuth;
