import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Invoice = () => {
  return (
    <div className="page">
      <h2>this is invoice component</h2>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
      >
        go to contact
      </NavLink>
      <br></br>
      <NavLink
        to="/invoice"
        style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
      >
        go to invoice
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Invoice;