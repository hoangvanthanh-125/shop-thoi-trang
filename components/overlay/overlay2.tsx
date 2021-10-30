import React from "react";
import PropTypes from "prop-types";
import style from "./../../styles/layout/Overlay.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";

function Overlay2() {
  const {isOpenOverLay2} = useAppSelector(state => state.uiReducer)
  const dispatch = useAppDispatch();
  const handleClose = () => {
  dispatch(uiActions.closeOverlay2())
  dispatch(uiActions.closeModal());
  
  

  }

  return <div style={{zIndex:20}} onClick={() => handleClose()} className={`${style.overlay} ${isOpenOverLay2 && style.overlay__appear} `}></div>;
}
export default Overlay2;
