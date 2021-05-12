import React, { FC } from "react";
import style from "./EmailInput.module.scss";

interface IProps {
  formKey: any;
  formValue: any;
  setFormValue: any;
}

const EmailInput: FC<IProps> = (props: IProps) => {
  const { formValue, setFormValue, formKey } = props;
  return (
    <>
      <input placeholder ="Почта"
        className={style.email}
        type="text"
        onChange={(e)=>
          setFormValue({ ...formValue, [formKey]: e.currentTarget.value}) 
          } 
          value={formValue[formKey]}
      />
    </>
  );
};

export default EmailInput;
