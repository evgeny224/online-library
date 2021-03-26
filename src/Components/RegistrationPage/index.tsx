import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import RegistrationForm from "./RegistrationForm";
import style from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
  return (
    <>
      <div className={style["auth-page_wrapper"]}>
        <Header />
        <RegistrationForm />
        <Footer />
      </div>
    </>
  );
};

export default RegistrationPage;
