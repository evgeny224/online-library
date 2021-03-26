import React, { FC } from "react";
import style from "./EmailInput.module.scss";

interface IProps {
  setEmail: any;
}

const EmailInput: FC<IProps> = (props: IProps) => {
  const { setEmail } = props;
  return (
    <>
      <input placeholder ="Почта"
        className={style.email}
        type="text"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
    </>
  );
};

export default EmailInput;
