// new password validation form =>

import React from "react";

const PWDRequisite = (
  capsLetterFlag,
  numberFlag,
  pwdLenghtFlag,
  specialCharFlag
) => {
  return (
    <div>
      <p className={capsLetterFlag}> must contain 1 capital letter</p>
      <p className={numberFlag}>must contact number</p>

      <p className={pwdLenghtFlag}>must be 8 Chars long </p>

      <p className={specialCharFlag}>must contain special charact</p>
    </div>
  );
};

export default PWDRequisite;

// // import React, { useState, useEffect } from "react";
// // import MailOutlineIcon from "@material-ui/icons/MailOutline";
// // import LockOpenIcon from "@material-ui/icons/LockOpen";
// // import { Link, useNavigate } from "react-router-dom";
// // import { adminLogin } from "../../Store/Actions/statementAction";
// // import { useDispatch, useSelector } from "react-redux";
// // import { ClearError } from "../../Store/Actions/statementAction";
// // import { toast, ToastContainer } from "react-toastify";
// // import { toastStyle } from "../../pages/BankMaster/addBank";
// // import logo from "../../assets/icons/logo.svg";

// // import { Loader } from "../Loader/Loader";
// // import PWDReqiste from "../_shared/Dynamic/Validation/PWDRequisite";
// // import { CheckSharp } from "@material-ui/icons";
// // import { SafetyCheckSharp } from "@mui/icons-material";
// // const Login = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { loading, isAuthenticated, error } = useSelector(
// //     (state) => state.auth
// //   );
// //   const [username, setUsername] = useState("");
// // const [pwdRequiste, setPwdRequiste] = useState(false);
// // //   const [password, setpassword] = useState(false);
// // const [checks, setchecks] = useState({
// //   capsLetterCheck: false,
// //   pwdLenghtCheck: false,
// //   numberCheck: false,

// //   specialCharCheck: false,
// // });

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     const body = {
// //       username: username,
// //       password: password,
// //     };
// //     dispatch(adminLogin(body));
// //     setpassword(e.target.value);
// //   };
// // const handleOnFocus = () => {
// //   setPwdRequiste(true);
// // };
// // const handleonBlur = () => {
// //   setPwdRequiste(false);
// // };

// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error, toastStyle);
// //       dispatch(ClearError());
// //     }
// //     if (isAuthenticated) {
// //       navigate(`/dashboard`);
// //     }
// //   }, [dispatch, error, isAuthenticated, navigate]);
// // const handelOnKeyUp = (e) => {
// //   const { value } = e.target;
// //   const capsLetterCheck = /[A-Z]/.test(value);
// //   const numberCheck = /[0-9]/.test(value);
// //   const pwdLenghtCheck = value.length >= 8;
// //   const specialCharCheck = /[!@#$%^&*]/.test(value);

// //   SafetyCheckSharp({
// //     capsLetterCheck,
// //     pwdLenghtCheck,
// //     numberCheck,

// //     specialCharCheck,
// //   });
// // };

// //   return (
// //     <>
// //       <div className="LoginSignUpContainer">
// //         <div className="LoginSignUpBox">
// //           <ToastContainer />
// //           <div>
// //             <div className="login_signUp_toggle">
// //               <img src={logo} className="logo" alt="logo" />
// //             </div>
// //           </div>
// //           <form className="loginForm" onSubmit={handleLogin}>
// //             <div className="loginusername">
// //               <MailOutlineIcon />
// //               <input
// //                 type="text"
// //                 placeholder="Username"
// // required;
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //               />
// //             </div>
// //             <div className="loginPassword">
// //               <LockOpenIcon />
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// // onFocus = { handleOnFocus };
// // onBlur = { handleonBlur };
// // onKeyUp = { handelOnKeyUp };
// //                 value={password}
// //                 onChange={(e) => setpassword(e.target.value)}
// //               />
// //             </div>
// {
// //   pwdRequiste ? (
// //     <PWDReqiste
// //       capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
// //       numberFlag={checks.numberCheck ? "valid" : "ivalid"}
// //       pwdLenghtFlag={checks.pwdLenghtFlag ? "valid" : "invalid"}
// //       specialCharFlag={checks.specialCharFlag ? "valid" : "invalid"}
// //     />
// //   ) : null;
// // }

// // <Link to="#">Forgot Password ?</Link>;
// //             <input type="submit" value="Login" className="loginBtn" />
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// // export default Login;
