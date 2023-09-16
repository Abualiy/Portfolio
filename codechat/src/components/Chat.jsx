import React, { useContext } from "react";
import Cam from "../asset/cam.png";
import Add from "../asset/add.png";
import More from "../asset/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const alerts = () => {
    alert("This service will start soon!")
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="userInfo">
          <img src={data.user?.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <img src={Cam} alt="" onClick={alerts} />
          <img src={Add} alt="" onClick={alerts} />
          <img src={More} alt="" onClick={alerts} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;