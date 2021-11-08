import React from "react";
import { listColor } from "../../fakeData";
import { useAppSelector } from "../../redux/hook";
import style from "./../../styles/layout/ThemeColor.module.scss";
interface Props {
  handleChangedThemeColor: (color: string) => void;
  themeColor: string;
}
function ThemeColor({ handleChangedThemeColor, themeColor }: Props) {
  const { isOpenListColor } = useAppSelector((state) => state.uiReducer);
  return (
    <div className={`${style.wrapListColor} ${isOpenListColor ? style.appear : ""}`}>
      <h3 className={style.title}>Thay đổi màu sắc chính của trang web</h3>
      <div className={style.listColor}>
        {listColor.map((color) => (
          <div
            onClick={() => handleChangedThemeColor(color)}
            className={`${style.colorItem} ${color === themeColor ? style.activeColor : ""}`}
            key={color}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ThemeColor;
