import React from 'react'
import { userPNG } from '../utils/constants';

function Comments({ user , text}) {
  return (
    <div className="border-2">
      <div className="pl-6 pt-4 flex">
        <img alt="user" className="w-6" src={userPNG}></img>
        <p className="font-bold pl-4">{user}</p>
      </div>
      <div className="pl-16">{text}</div>
    </div>
  );
}

export default Comments;