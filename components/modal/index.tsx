import React from "react";
import style from "./../../styles/layout/Modal.module.scss";
import {useAppDispatch, useAppSelector} from  './../../redux/hook'
import ClearIcon from "@material-ui/icons/Clear";
import { uiActions } from "../../redux/slice/uiSlice";

function ModalCpn() {
  const {bodyModal,headModal,isOpenModal} = useAppSelector(state => state.uiReducer);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(uiActions.closeOverlay2());
    dispatch(uiActions.closeModal());
  }
  return (
    <div className={`${style.wrapModal} ${isOpenModal && style.wrapModalAppear}`}>
      {headModal && (
        <div className={style.headModal}>
          <h3 className={style.title}>{headModal}</h3>
          <ClearIcon onClick={() => handleClose()} className={style.clearIcon} />
        </div>
      )}
      {bodyModal && <div className={style.bodyModal}>{bodyModal}</div>}
    </div>
  );
}

export default ModalCpn;
