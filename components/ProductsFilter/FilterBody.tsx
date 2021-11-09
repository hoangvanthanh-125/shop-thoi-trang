import React, { useState } from "react";
import style from "./../../styles/layout/ProductsFilter.module.scss";
import Slider from "@material-ui/core/Slider";
const listSize = ["XS", "S", "M", "L", "XL", "XXL", "26", "27", "28", "29", "30", "31", "32", "33"];
const listColor = ["white", "black", "blue", "green", "red", "yellow", "orange", "violet"];
interface PropsType {
  openFilter?: boolean;
}
function FilterBody({ openFilter }: PropsType) {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleReset = () => {
    setSize("");
    setColor("");
  };
  return (
    <div className={`${!openFilter && style.wrapFilter__bodyHidden} ${style.containerWrapFilter} `}>
      <div className={`${style.wrapFilter__body} `}>
        <div className={style.wrapFilter__body__item}>
          <div className={`${style.title} theme`}>Giá</div>
          <div className={style.content}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              scale={(x) => x * 100000}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="off"
              // getAriaValueText={valuetext}
            />
            <div className={style.content__price}>
              <p>{value[0] * 100000}</p>
              <p>{value[1] * 100000}</p>
            </div>
          </div>
        </div>
        <div className={style.wrapFilter__body__item}>
          <div className={`${style.title} theme`}>Kích cỡ</div>
          <div className={style.content}>
            {listSize.map((item) => (
              <div
                onClick={() => setSize(item)}
                className={`${style.content__size} ${item === size && style.content__sizeActive}`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={style.wrapFilter__body__item}>
          <div className={`${style.title} theme`}>Màu sắc chính</div>
          <div className={style.content}>
            {listColor.map((item) => (
              <div
                onClick={() => setColor(item)}
                className={`${style.content__color} ${
                  item === color && style.content__colorActive
                }`}
                style={{ background: item }}
                key={item}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.wrapFilter__action}>
        <button className={`${style.filterAction} theme`}>Lọc</button>
        <button onClick={() => handleReset()} className={style.resetAction}>
          Đặt lại
        </button>
      </div>
    </div>
  );
}

export default FilterBody;
