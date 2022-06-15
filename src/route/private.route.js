import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./constant";
import { isLogin } from "../utils/isLogin";

import Header from "../Component/Header";

/**
 *
 * @param {*} param0  component of page
 * @returns private route
 */

const PrivateRoute = ({ component: Component, restricted, ...props }) => {
  return isLogin() ? (
    <>
      <Header /> <Component {...props} />
    </>
  ) : (
    <Navigate replace to={ROUTES.INDEX} />
  );
};

export default PrivateRoute;
