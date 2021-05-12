import React, { FC } from "react";
import style from "./PasswordInput.module.scss";

interface IProps {
  formValue: any;
  setFormValue: any;
  formKey: string;
}

const PasswordInput: FC<IProps> = (props: IProps) => {
  const { formValue, setFormValue, formKey } = props;
  return (
    <>
      <input placeholder ="Пароль"
        className={style.input}
        type="password"
        onChange={(e)=>
          setFormValue({ ...formValue, [formKey]: e.currentTarget.value}) 
          } 
          value={formValue[formKey]}
      />
    </>
  );
};

export default PasswordInput;
