import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPageWrapper from "../../Components/MainPageWrapper";
import AuthPageContainer from "../AuthPageContainer";
import RegistrationContainer from "../../Components/RegistrationPageContainer";



function App() {
  return (
    <>
      <Switch>
        <Route path="/auth" component={AuthPageContainer} />
        <Route path="/registration" component={RegistrationContainer} />
        <Route exact path="/" component={MainPageWrapper} />
        <Redirect to="404" />
      </Switch>
    </>
  );

}

export default App;
