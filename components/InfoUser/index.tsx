import ClearIcon from "@material-ui/icons/Clear";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import style from "./../../styles/layout/infoUserNotAuth.module.scss";
import UserInfoNotAuth from "./UserInfoNotAuth";
import UserInfoWithAuth from "./UserInfoWithAuth";
function InfoUser(props) {
  const [isAuth, setAuth] = useState(false);
  const { isOpenUserInfo } = useAppSelector((state) => state.uiReducer);
  const dispatch = useAppDispatch();
  const handleClickCloseUserInfo = () => {
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeUserInfo());
  };
  return (
    <div className={`${style.infoContainer} ${isOpenUserInfo && style.infoContainerAppear}`}>
      <div className={style.head}>
        <h2>{isAuth ? "Thông tin " : "Xác thực"}</h2>
        <ClearIcon onClick={() => handleClickCloseUserInfo()} className={style.clearIcon} />
      </div>
      {!isAuth ? <UserInfoNotAuth /> : <UserInfoWithAuth />}
    </div>
  );
}

export default InfoUser;
