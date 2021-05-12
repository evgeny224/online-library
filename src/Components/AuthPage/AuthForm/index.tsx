import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../../store/AuthPage/actions";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {


  const [authFormValue, setAuthFormValue] = useState<any>({
    login: "",
    password: "",
});

const dispatch = useDispatch();

const onSubmit = () => {
    dispatch(userLoginAction(authFormValue.login));
    setAuthFormValue({login: "", password: ""});
};


  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>
          <TextInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            formKey="login"
          />
          <PasswordInput  
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            formKey="password"
          />
          <button
            className={style.button}
            type="button"
            onClick={onSubmit}>
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
