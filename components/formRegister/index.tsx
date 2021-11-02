import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./../../styles/layout/paymentComponent/paymentForm.module.scss";
import style2 from "./../../styles/layout/FormChangePassWord.module.scss";
import * as yup from "yup";
import { InputField } from "../../helper/InputField";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
function FormRegister(props) {
  const dispatch = useAppDispatch();
  const schema = yup
    .object({
      name: yup.string().required("Vui lòng nhập tên"),
      password: yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu ít nhất 6 kí tự"),
      email: yup.string().required("Vui lòng nhập email").email("Email sai định dạng"),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
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
        <InputField type="text" placeholder="Tên" name="name" control={control} />
        <p className={style.notiError}>{errors.name?.message}</p>
      </div>
      <div className={style.wrapField}>
        <InputField type="email" placeholder="Email" name="email" control={control} />
        <p className={style.notiError}>{errors.email?.message}</p>
      </div>
      <div className={style.wrapField}>
        <InputField type="password" placeholder="Mật khẩu" name="password" control={control} />
        <p className={style.notiError}>{errors.password?.message}</p>
      </div>

      <div className={style.wrapField}>
        <InputField
          type="password"
          placeholder="Nhập lại mật khẩu"
          name="confirmPassword"
          control={control}
        />
        <p className={style.notiError}>{errors.confirmPassword?.message}</p>
      </div>
      <div className={style2.action}>
        <input
          style={{ flexBasis: "100%" }}
          type="submit"
          className={style2.action__submit}
          value="Đăng kí"
        />
      </div>
    </form>
  );
}

export default FormRegister;
