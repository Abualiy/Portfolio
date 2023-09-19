import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  // State to hold chat messages
  const [messages, setMessages] = useState([]);

   // Access chat data from the ChatContext
  const { data } = useContext(ChatContext);

  useEffect(() => {
    // Subscribe to changes in the chat document using onSnapshot
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      // Update the messages state with the data from the chat document
      doc.exists() && setMessages(doc.data().messages);
    });

    // Unsubscribe when the component unmounts
    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;