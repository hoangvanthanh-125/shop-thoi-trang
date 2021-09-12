import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import style from "../../styles/layout/header/Header.module.scss";

function HeaderSearch(props) {
  return (
    <form className={style.formSearch}>
      <input type="text" placeholder="Tìm kiếm sản phẩm" />
      <SearchIcon className={style.iconSearch} />
    </form>
  );
}

export default HeaderSearch;
