import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./../../styles/layout/paymentComponent/paymentForm.module.scss";
import * as yup from "yup";
import { InputField } from "../../helper/InputField";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import style2 from './../../styles/layout/FormChangePassWord.module.scss';

function FormChangeNameUser(props) {
  const dispatch = useAppDispatch();
  const schema = yup
    .object({
      newName: yup
        .string()
        .required("Vui lòng nhập tên")
        .min(2, "Tối thiểu 2 kí tự")
        .max(25, "Tối đa 25 kí tự"),
    })
    .required();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    //goi apit post
    dispatch(uiActions.closeOverlay2());
    dispatch(uiActions.closeModal());
  });
  const handleCancel = () => {
    dispatch(uiActions.closeOverlay2());
    dispatch(uiActions.closeModal());
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={style.wrapField}>
        <InputField
          type="text"
          placeholder="Nhập tên mới"
          name="newName"
          control={control}
        />
        <p className={style.notiError}>{errors.newName?.message}</p>
      </div>
      <div className={style2.action}>
        <input
          type="submit"
          className={style2.action__submit}
          value="Cập nhật"
        />
        <button type="button" onClick={() => handleCancel()} className={style2.action__cancel}>Hủy bỏ</button>
      </div>
    </form>
  );
}

export default FormChangeNameUser;
