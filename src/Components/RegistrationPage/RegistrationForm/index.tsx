import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import EmailInput from "../../Common/Forms/EmailInput"
import style from "./RegistrationForm.module.scss";

const RegistrationForm: FC = () => {
  const [formValue, setFormValue] = useState({
    login: "",
    email: "",
    password: "",
});

  return (
    <>
      <div className={style["reg-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          <TextInput 
            formKey="login"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <PasswordInput 
            formKey="password"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <EmailInput  
            formKey="email"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <button
            className={style.button}
            type="button"
            onClick={()=>{
              setFormValue({
                  login: "",
                  email: "",
                  password: "",
              });
          }}>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;