import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./../../styles/layout/paymentComponent/paymentForm.module.scss";
import style2 from "./../../styles/layout/FormChangePassWord.module.scss";
import loginStyle from "./../../styles/layout/FormLogin.module.scss";
import * as yup from "yup";
import { InputField } from "../../helper/InputField";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import FacebookIcon from "@material-ui/icons/Facebook";
function FormLogin(props) {
  const dispatch = useAppDispatch();
  const schema = yup
    .object({
      name: yup.string().required("Vui lòng nhập tên"),
      password: yup.string().required("Vui lòng nhập mật khẩu"),
      email: yup.string().required("Vui lòng nhập email").email("Email sai định dạng"),
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
        <InputField type="email" placeholder="Email" name="email" control={control} />
        <p className={style.notiError}>{errors.email?.message}</p>
      </div>

      <div className={style.wrapField}>
        <InputField type="password" placeholder="Mật khẩu" name="password" control={control} />
        <p className={style.notiError}>{errors.password?.message}</p>
      </div>

      <div className={style2.action}>
        <input
          style={{ flexBasis: "100%", marginRight: 0 }}
          type="submit"
          className={style2.action__submit}
          value="Đăng nhập"
        />
      </div>
      <div className={loginStyle.wrapAnotherLogin}>
        <div className={`${loginStyle.loginGoogle} ${loginStyle.anotherItem}`}>
          <img className={loginStyle.icon} src="/google.png" />
          <p className={loginStyle.title}>Google</p>
        </div>
        <div className={`${loginStyle.loginFacebook} ${loginStyle.anotherItem} `}>
          <img className={loginStyle.icon} src="/facebook.png" />
          <p className={loginStyle.title}>Facebook</p>
        </div>
      </div>
    </form>
  );
}

export default FormLogin;
