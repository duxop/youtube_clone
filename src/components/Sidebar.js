import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const sideBarStatus = useSelector((store) => store.sidebar.show);
  if (sideBarStatus === false) return null;
  return (
    <ul className="pr-12 h-[100%] shadow-2xl col-span-1 [&>*]:pl-4 [&>*]:py-4">
      <li>
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
      </li>
      <li>Shorts</li>
      <li>Subscription</li>
      <li>Music</li>
    </ul>
  );
}

export default Sidebar;
