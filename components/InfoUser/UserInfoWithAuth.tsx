import React from 'react';
import PropTypes from 'prop-types';
import style from './../../styles/layout/InfoUserWithAuth.module.scss'
import { Avatar } from '@material-ui/core';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { useAppDispatch } from '../../redux/hook';
import { uiActions } from '../../redux/slice/uiSlice';
import FormChangePassWord from '../FormChangePassword';

function UserInfoWithAuth() {
  const dispatch = useAppDispatch();
 const  handleClickChangePass = () => {
    dispatch(uiActions.openModal());
    dispatch(uiActions.openOverlay2());
    dispatch(uiActions.fetchHeadModal("Đổi mật khẩu"));
    dispatch(uiActions.fetchBodyModal(<FormChangePassWord/> ))
 }
  return (
    <div className={style.container}> 
  <div className={style.avatar}>
    <Avatar className={style.avatarIcon} src="">T</Avatar>
    <label className={style.inputFile} htmlFor="inputFile">
      <CameraAltOutlinedIcon />
      <p className={style.title}>Tải ảnh lên</p>
    </label>
    <input id="inputFile" type="file" hidden />
  </div>
  <div>
    <div className={style.wrapItem}>
     <AccountCircleOutlinedIcon />
     <p className={style.titleItem}>Hoàng văn Thành</p>
    </div>
    <div className={style.wrapItem}>
     <EmailOutlinedIcon />
     <p className={style.titleItem}>thanh@gmail.com</p>
     </div>
     <div className={style.wrapItem}>
     <ShoppingCartOutlinedIcon />
     <p className={style.titleItem}>Đơn hàng</p>
    </div>
    <div onClick={() => handleClickChangePass()} className={style.wrapItem}>
     <VpnKeyOutlinedIcon />
     <p className={style.titleItem}>Đổi mật khẩu</p>
    </div>
    <div className={style.wrapItem}>
     <ExitToAppOutlinedIcon />
     <p className={style.titleItem}>Đăng xuất</p>
    </div>
  </div>
    </div>
  );
}

export default UserInfoWithAuth;