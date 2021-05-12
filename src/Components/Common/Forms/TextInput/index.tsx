import React, { FC } from "react";
import style from "./TextInput.module.scss";

interface IProps {
  formValue: any;
  setFormValue: any;
  formKey: string;
}

const TextInput: FC<IProps> = (props: IProps) => {
  const { formValue, setFormValue, formKey } = props;
  return (
    <>
      <input placeholder ="Логин"
        className={style.input}
        type="text"
        onChange={(e)=>
          setFormValue({ ...formValue, [formKey]: e.currentTarget.value}) 
          } 
          value={formValue[formKey]}
      />
    </>
  );
};

export default TextInput;
