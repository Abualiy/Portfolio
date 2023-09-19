import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // Access current user information from the AuthContext
  const { currentUser } = useContext(AuthContext);
  // Access chat data from the ChatContext
  const { data } = useContext(ChatContext);

  // Access chat data from the ChatContext
  const ref = useRef();

  useEffect(() => {
    // Scroll the message element into view smoothly when the message changes
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        <div className="cont">
          <p>{message.text}</p>
          <span className="message-time">{message.date.toDate().toLocaleString()}</span>
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Message;