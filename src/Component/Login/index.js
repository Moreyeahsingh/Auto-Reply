import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";

import { createTheme } from "@mui/material/styles";

import LoadingSpinner from "../Loader/Loader";
import "./login.css";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const [passwordErr, setPasswordErr] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // dispatch(login(true));
    }
  });

  const handelApi = async () => {
    console.log(email, password);
    setIsLoading(true);
    await axios
      .post("https://603c-103-15-67-130.ngrok.io/api/auth/signin", {
        email: email,
        password: password,
      })

      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        setIsLoading(false);
        // dispatch(login(true));
        navigate("/dashboard");
      })

      .catch((error) => {
        // dispatch(login(false));

        console.log(error);
        setIsLoading(false);
      });
  };
  const show = () => {
    if (!email) {
      setEmailErr("The Name field is required");
    }
    if (!password) {
      setPasswordErr("The password field is required");
    } else {
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div>
            <div class="logo"></div>
            <div class="login-block">
              <h1>Login</h1>
              <div className="EmailField">
                <div>
                  <MdOutlineMail class="Email-icon" />
                </div>
                <div>
                  <input
                    className="inputEmail"
                    type="text"
                    placeholder="Email"
                    id="email"
                    required
                    name="email"
                    label="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
                {/* <span className="loginErro">{emailErr}</span> */}
              </div>
              <div className="PasswordField">
                <div>
                  <RiLockPasswordLine className="Password-icon" />
                </div>
                <div>
                  <input
                    className="inputPassword"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    id="password"
                    required
                    name="password"
                    onClick={show}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </div>
                <span className="loginErro1">{passwordErr}</span>
              </div>
              <button
                onClick={() => {
                  handelApi();
                }}
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
