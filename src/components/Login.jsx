import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckLogin from "../context/checkLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const Login = () => {
  // const navigate = useNavigate();
  // const { userLogin, setUserLogin } = useContext(CheckLogin);
  // const handelSubmit = () => {
  //   setUserLogin(true);
  //   navigate("/create", { state: "wellcome !", replace: true });
  // };
  const [loggedInUser, setLoggedInUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoggedInUser({ ...loggedInUser, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(setUser(loggedInUser));
    localStorage.setItem('user', loggedInUser)
  }

  return (
    <div className="page">
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="userName"
          name="userName"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button onClick={(e)=>handelSubmit(e)}>submit</button>
      </form>
    </div>
  );
};

export default Login;
