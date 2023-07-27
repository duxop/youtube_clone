import React from "react";
import { userPNG } from "../utils/constants";

function ChatMessgae({ name, message }) {
  return (
    <div className="my-2 h-8 border border-sky-500 rounded-md items-center overflow-hidden flex">
      <img alt="user" className="w-7" src={ userPNG }></img>
      <span className="font-bold ml-2"> { name }</span>
      <span className="ml-2"> { message }</span>
    </div>
  );
}

export default ChatMessgae;
