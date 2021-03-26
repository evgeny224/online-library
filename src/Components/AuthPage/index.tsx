
import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import AuthForm from "./AuthForm";
import style from "./AuthPage.module.scss";

const AuthPage: FC = () => {
  return (
    <>
      <div className={style["auth-page_wrapper"]}>
        <Header />
        <AuthForm />
        <Footer />
      </div>
    </>
  );
};

export default AuthPage;
