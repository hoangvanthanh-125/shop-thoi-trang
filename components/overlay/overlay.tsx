import React from "react";
import PropTypes from "prop-types";
import style from "./../../styles/layout/Overlay.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
Overlay.propTypes = {};

function Overlay() {
  const {isOpenSideBar,isOpenOverLay} = useAppSelector(state => state.uiReducer)
  const dispatch = useAppDispatch();
  const handleCloseSideBar = () => {
  dispatch(uiActions.closeOverlay())
  dispatch(uiActions.closeSideBar());
  dispatch(uiActions.closeSearchMobile());

  }

  return <div onClick={() => handleCloseSideBar()} className={`${style.overlay} ${isOpenOverLay && style.overlay__appear}`}></div>;
}
export default Overlay;
