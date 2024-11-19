import React from "react";
import Userheader from "./Userheader";
import { Outlet } from "react-router-dom";

function Userlayout() {
  return (
    <div>
      <Userheader />
      <Outlet />
    </div>
  );
}

export default Userlayout;
