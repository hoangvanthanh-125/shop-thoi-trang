import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import style from "../../styles/layout/header/Header.module.scss";
import {useRouter} from "next/router";
import next from "next";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";

function HeaderSearch() {
  const dispatch = useAppDispatch();
  const [textSearch,setTextSearch] = useState("");
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e && e.preventDefault();
   if(textSearch.trim() && textSearch){
    router.push(`search?q=${textSearch}`);
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeSearchMobile());

   }

  }
  const handleChange = (e) => {
    setTextSearch(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className={style.formSearch}>
      <input value={textSearch} onChange ={handleChange} type="text" placeholder="Tìm kiếm sản phẩm" />
      <SearchIcon className={style.iconSearch} onClick = {handleSubmit} />
    </form>
  );
}

export default HeaderSearch;
