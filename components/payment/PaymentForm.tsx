import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputField, SelectField } from "../../helper/InputField";
import style from "./../../styles/layout/paymentComponent/paymentForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

function PaymentForm(props) {
  const [listCity, setListCity] = useState([]);
  const [listHuyen, setListHuyen] = useState([]);
  const [listXa, setListXa] = useState([]);
  const schema = yup
    .object({
      name: yup.string().required("Vui lòng nhập họ tên"),
      phone: yup
        .number()
        .positive("Số điện thoại không hợp lệ")
        .integer("Số điện thoại không hợp lệ")
        .required("Vui lòng nhập số điện thoại")
        .max(9999999999, "Số điện thoại không hợp lệ")
        .min(1, "Số điện thoại không hợp lệ"),
      city: yup.string().required("Vui lòng nhập tỉnh,thành phố"),
      huyen: yup.string().required("Vui lòng nhập huyện"),
      xa: yup.string().required("Vui lòng nhập xã"),
      specificLocation: yup
        .string()
        .required("Vui lòng nhập địa chỉ cụ thể")
        .min(5, "Tối thiểu 5 kí tự"),
    })
    .required();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/phuockaito/KaitoShop.cf/master/src/data.json"
    ).then((res) => res.json().then((city) => setListCity(city)));
  }, []);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let city = watch("city");
  let huyen = watch("huyen");
  useEffect(() => {
    if (city) {
      const listHuyen = listCity.find((item) => item.name === city).huyen;
      setListHuyen(listHuyen);
    }
  }, [city]);
  useEffect(() => {
    if (huyen) {
      const listXa = listHuyen.find((item) => item.name === huyen).xa;
      setListXa(listXa);
    }
  }, [huyen]);
  const onSubmit = handleSubmit((data) => {
    //goi apit post
  });
  return (
    <form className={style.wrapForm} onSubmit={onSubmit}>
      <div className={style.formHead}>
        <LocalShippingIcon />
        <h2 className={style.formHead__title}>Thông tin giao hàng</h2>
      </div>

      <div className={style.wrapField}>
        <InputField placeholder="Họ và tên" name="name" control={control} />
        <p className={style.notiError}>{errors.name?.message}</p>
      </div>
      <div className={style.wrapField}>
        <InputField
          placeholder="Số điện thoại"
          name="phone"
          control={control}
        />
        <p className={style.notiError}>{errors.phone?.message}</p>
      </div>
      <div className={style.wrapField}>
        <SelectField
          control={control}
          name="city"
          label="Tỉnh,thành phố"
          options={listCity}
        />
        <p className={style.notiError}>{errors.city?.message}</p>
      </div>

      <div className={style.wrapField}>
        <SelectField
          control={control}
          name="huyen"
          label="Huyện"
          options={listHuyen}
        />
        <p className={style.notiError}>{errors.huyen?.message}</p>
      </div>
      <div className={style.wrapField}>
        <SelectField
          control={control}
          name="xa"
          label="Xã,phường,thị trấn"
          options={listXa}
        />
        <p className={style.notiError}>{errors.xa?.message}</p>
      </div>
      <div className={style.wrapField}>
        <InputField
          placeholder="Địa chỉ cụ thể (xóm,đường,số nhà,...)"
          name="specificLocation"
          control={control}
        />
        <p className={style.notiError}>{errors.specificLocation?.message}</p>
      </div>
      <input className={style.buttonSubmit} type="submit" />
    </form>
  );
}

export default PaymentForm;