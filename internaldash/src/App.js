import React from "react";
import { Account } from "./components/Accounts";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Status from "./components/Status";
import Settings from "./components/Settings";

export default () => {
  return (
    <Account>
      <Status />
      <Login />
      <ForgotPassword />
      <Settings />
    </Account>
  );
};
