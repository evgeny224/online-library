import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import EmailInput from "../../Common/Forms/EmailInput"
import style from "./RegistrationForm.module.scss";

const RegistrationForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <div className={style["reg-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          <TextInput setLogin={setLogin} />
          <PasswordInput setPassword={setPassword} />
          <EmailInput setEmail={setEmail} />
          <button
            className={style.button}
            type="button"
            onClick={() =>
              console.log({ login, password, email}, "Объект авторизации")
            }>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;