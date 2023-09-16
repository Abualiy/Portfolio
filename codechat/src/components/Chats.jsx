import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  // State variables
  const [chats, setChats] = useState([]); // Store user chat data
  const [selectedUser, setSelectedUser] = useState(null); // Store the selected user

  // Contexts
  const { currentUser } = useContext(AuthContext); // Access the current user
  const { dispatch } = useContext(ChatContext); // Access the chat context's dispatch function

  // Effect for retrieving chat data
  useEffect(() => {
    const getChats = () => {
      // Set up a Firestore listener for the current user's chat data
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      // Clean up the listener when the component unmounts
      return () => {
        unsub();
      };
    };

    // Retrieve chat data when currentUser.uid changes
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // Handle user selection
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u }); // Dispatch a CHANGE_USER action
    setSelectedUser(u); // Set the selected user
  };

  // Determine user chat element's background style
  const getUserChatStyle = (user) => {
    // Determine the background color based on whether the user is selected or not
    return selectedUser && selectedUser.uid === user.uid
      ? { backgroundColor: "#2f2d52" } // Selected user background color
      : {}; // Default background color
  };

  // Get a preview of the last message
  const getLastMessagePreview = (text) => {
    if (text) {
      // Check if text is defined before accessing its length property
      if (text.length <= 7) {
        return text;
      } else {
        return text.slice(0, 15) + "...";
      }
    }
    return ""; // Return an empty string if text is undefined
  };

  // Render user chat elements
  return (
    <div className="Chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            style={getUserChatStyle(chat[1].userInfo)} // Apply background style
            onClick={() => handleSelect(chat[1].userInfo)} // Handle user selection
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{getLastMessagePreview(chat[1].lastMessage?.text)}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
