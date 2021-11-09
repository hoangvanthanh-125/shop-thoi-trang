import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import style from "./../../styles/layout/Sort.module.scss";

function ProductSort(props) {
  return (
    <select className={style.select}>
      <option>Từ A-Z</option>
      <option>Từ Z-A</option>
      <option>Giá tăng dần</option>
      <option>Giá giảm dần</option>
      <option>Mới nhất</option>
    </select>
  );
}

export default ProductSort;
