import React from "react";
import PropTypes from "prop-types";
import FilterBody from "../ProductsFilter/FilterBody";
import style from "./../../styles/layout/FilterMobile.module.scss";

import ClearIcon from "@material-ui/icons/Clear";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";

function FilterMobile(props) {
  const dispatch = useAppDispatch();
  const { isOpenFilterMobile } = useAppSelector((state) => state.uiReducer);
  const handleClose = () => {
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeFilterMobile());
  };
  return (
    <div
      className={`${style.wrap} ${!isOpenFilterMobile && style.filterApear}`}
    >
      <div className={style.wrap__headfilter}>
        <h3>Lọc sản phẩm</h3>
        <ClearIcon style={{cursor:'pointer'}} onClick={() => handleClose()} />
      </div>
      <FilterBody openFilter={true} />
    </div>
  );
}

export default FilterMobile;
