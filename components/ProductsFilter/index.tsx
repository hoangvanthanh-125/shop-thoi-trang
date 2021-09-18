import React, { useState } from "react";
import style from "./../../styles/layout/ProductsFilter.module.scss";
import FilterListIcon from "@material-ui/icons/FilterList";
import FilterBody from "./FilterBody";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";

function ProductsFilter(props) {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useAppDispatch();
  const handleClickOpenFilterMobile = () => {
    dispatch(uiActions.openFilterMobile());
    dispatch(uiActions.openOverlay());
  };

  return (
    <div className={style.wrapFilter}>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className={style.wrapFilter__head}
      >
        <FilterListIcon />
        <p className={style.wrapFilter__head__title}>Lọc sản phẩm</p>
      </div>
      <div
        onClick={() => handleClickOpenFilterMobile()}
        className={`${style.wrapFilter__head} ${style.wrapFilter__headMobile}`}
      >
        <FilterListIcon />
        <p className={style.wrapFilter__head__title}>Lọc sản phẩm</p>
      </div>
      <div className={style.wrapbody}>
        <FilterBody openFilter={openFilter} />
      </div>
    </div>
  );
}

export default ProductsFilter;
