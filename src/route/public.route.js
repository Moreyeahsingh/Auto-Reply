import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils/isLogin";
import { ROUTES } from "./constant";

/**
 *
 * @param {*} param0   component of page
 * @returns  public route
 */
const PublicRoute = ({ component: Component, restricted, ...props }) => {
  console.log("PublicRoute", isLogin());

  return isLogin() && !restricted ? (
    <Navigate replace to={ROUTES.DASHBOARD} />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;
