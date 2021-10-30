import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { uiActions } from '../../redux/slice/uiSlice';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import style from "./../../styles/layout/infoUserNotAuth.module.scss";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
function UserInfoNotAuth(props) {
  return (
    <div className={style.notAuth}>
    
     <div className={style.wrapLogin}>
        <AccountCircleIcon />
        <p className={style.title}>Đăng nhập</p>
     </div>
     <div className={style.wrapLogin}>
        <VpnKeyIcon />
        <p className={style.title}>Đăng kí</p>
     </div>
  </div>
  );
}

export default UserInfoNotAuth;