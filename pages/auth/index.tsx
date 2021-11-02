import React, { useEffect, useRef, useState } from "react";
import FormChangeNameUser from "../../components/FormChangeNameUser";
import FormChangePassWord from "../../components/FormChangePassword";
import style from "./../../styles/page/Auth.module.scss";
import Head from "next/head";
import { renderSnow } from "../../components/Carousel";
import snowStyle from "./../../styles/layout/Snow.module.scss";
import FormRegister from "../../components/formRegister";
import FormLogin from "../../components/formLogin/FormLogin";
import { useRouter } from "next/router";

function Auth(props) {
  const router = useRouter();
  const { type } = router.query;
  const [auth, setAuth] = useState(type || "");

  const handleChangeAuth = () => {
    if (auth === "login") {
      setAuth("register");
    } else {
      setAuth("login");
    }
  };
  useEffect(() => {
    if (typeof document !== undefined) {
      if (auth === "register") {
        document.getElementById("wrapform").classList.add("authRorate");
        document.getElementById("wrapform").classList.remove("authRorate2");
      } else if (auth === "login") {
        document.getElementById("wrapform").classList.remove("authRorate");
        document.getElementById("wrapform").classList.add("authRorate2");
      }
    }
  }, [auth]);

  return (
    <div className={style.authContainer}>
      <Head>
        <title>{auth === "register" ? "Đăng kí" : "Đăng nhập"}</title>
      </Head>
      <div id="wrapform" className={style.wrapForm}>
        <div className={style.header}>
          <div className={style.switch}>
            <button
              onClick={() => setAuth("login")}
              className={`${style.switchLogin} ${auth === "register" ? style.noAt : ""}`}
            >
              Login
            </button>
            <button
              onClick={() => setAuth("register")}
              className={`${style.switchRegister} ${
                auth === "login" || auth === "" ? style.noAt : ""
              }`}
            >
              Register
            </button>
          </div>
          <h2 className={style.title}>{auth === "register" ? "Đăng kí" : "Đăng nhập"}</h2>
        </div>
        <div className={style.form}>{auth === "register" ? <FormRegister /> : <FormLogin />}</div>
      </div>
      <div className={snowStyle.container}>{renderSnow()}</div>
    </div>
  );
}

export default Auth;
