import React, { useContext, useEffect } from "react";
import checkLogin from "../context/checkLogin";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Requierdauth = ({ children }) => {
  const { userLogin, setUserLogin } = useContext(checkLogin);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(userLogin);
  
  if (!userLogin) {
    navigate("/login", { state: location });
  } 
    return (
        <div>
            {children}
        </div>
    );

};

export default Requierdauth;
