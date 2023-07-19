import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const sideBarStatus = useSelector((store) => store.sidebar.show);
  if (sideBarStatus === false) return null;
  return (
    <ul className="bg-orange-200 col-span-1 [&>*]:pl-4 [&>*]:py-4">
      <li>Home</li>
      <li>Shorts</li>
      <li>Subscription</li>
      <li>Music</li>
    </ul>
  );
}

export default Sidebar;
