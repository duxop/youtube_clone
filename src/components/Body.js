import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Body() {
  console.log("Jai bhole");
  return (
    <div>
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
