import React, { useEffect, useState } from "react";
import ChatMessgae from "./ChatMessage";

function LiveChat() {

  const [userChat, setUserChat] = useState('');
  const [autoLiveChat, setAutoLiveChat] = useState([{
    name: "Shivam",
    message: "This Chat",
  }])

  const data = {
    name: "Shivam",
    message: "This Chat",
  };
  
  const changeChat = (e) => {
    setUserChat(e.target.value);
  }

  const sendChat = () => {
    setAutoLiveChat([...autoLiveChat, { name: "Dev", message: userChat }]);
    setUserChat('')
  }

  const allChats = autoLiveChat.map(({ name, message }) => (
    <ChatMessgae name={name} message={message} />
  ));
  

  useEffect(() => {
    const autoChat = setInterval(() => {
      setAutoLiveChat([ ...autoLiveChat, data]);
    }, 800);

    return () => {
      clearInterval(autoChat);
    };
  });

  return (
    <div className="flex flex-col w-[100%]">
      <div className="mx-2 h-[450px] p-2 w-[100%] border-1 rounded-md overflow-y-scroll flex flex-col-reverse">
        <div>{allChats}</div>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        sendChat();
      }}>
        <input
          value={userChat}
          onChange={(e) => changeChat(e)}
          placeholder="chat"
          className="mx-2 w-[calc(100%-80px)] border-2 border-black"
        ></input>
        <button
          className="w-[44px] rounded-md bg-cyan-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
