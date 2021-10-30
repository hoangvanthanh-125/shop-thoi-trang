import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./../../styles/layout/paymentComponent/paymentForm.module.scss";
import style2 from './../../styles/layout/FormChangePassWord.module.scss';
import * as yup from "yup";
import { InputField } from "../../helper/InputField";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
function FormChangePassWord(props) {
  const dispatch = useAppDispatch();
  const schema = yup
    .object({
      oldPass: yup.string().required("Vui lòng nhập mật khẩu cũ"),
      newPass: yup.string().required("Vui lòng nhập mật khẩu mới"),
      confirmNewPass: yup
        .string()
        .oneOf([yup.ref("newPass"), null], "Mật khẩu không khớp"),
    })
    .required();
  const {
    control,
    formState: { errors },
    handleSubmit
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
  }
  return (
    <form onSubmit={onSubmit}>
      <div className={style.wrapField}>
        <InputField
          type="password"
          placeholder="Mật khẩu cũ"
          name="oldPass"
          control={control}
        />
        <p className={style.notiError}>{errors.oldPass?.message}</p>
      </div>

      <div className={style.wrapField}>
        <InputField
          type="password"
          placeholder="Mật khẩu mới"
          name="newPass"
          control={control}
        />
        <p className={style.notiError}>{errors.newPass?.message}</p>
      </div>
      <div className={style.wrapField}>
        <InputField
          type="password"
          placeholder="Nhập lại mật khẩu mới"
          name="confirmNewPass"
          control={control}
        />
        <p className={style.notiError}>{errors.confirmNewPass?.message}</p>
      </div>
      <div className={style2.action}>
        <input
          type="submit"
          className={style2.action__submit}
          value="Cập nhật"
        />
        <button onClick={() => handleCancel()} className={style2.action__cancel}>Hủy bỏ</button>
      </div>
    </form>
  );
}

export default FormChangePassWord;
