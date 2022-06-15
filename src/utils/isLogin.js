/**
 *
 * @returns check its login or not with boolean status
 */
export const isLogin = () => {
  const token = localStorage.getItem("token");
  const isVerified = localStorage.getItem("isVerified");

  if (token) {
    return true;
  } else {
    return false;
  }
};
