import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", ">=", username),
      where("displayName", "<=", username + "\uf8ff")
    );

    try {
      const querySnapshot = await getDocs(q);
      const foundUsers = [];
      querySnapshot.forEach((doc) => {
        foundUsers.push(doc.data());
      });
      setUsers(foundUsers);
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  };

  const allowedKeys = [
    "KeyA", "KeyB", "KeyC", "KeyD", "KeyE", "KeyF", "KeyG", "KeyH", "KeyI", "KeyJ",
    "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", "KeyT",
    "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ",
    "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9",
    "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9"
  ];

  const handleKey = (e) => {
    const inputValue = e.target.value;

    // Check if the input is empty after the user clears it
    if (inputValue === "") {
      console.log("input is empty")
      setUsers([]);
    }else {
      if (allowedKeys.includes(e.code) || e.code === "Enter") {
      handleSearch();
    } else {
      handleSearch();
    }
    }
    
  };



  const handleSelect = async (selectedUser) => {
    // Your code to initiate a chat with the selected user goes here
    // ...
    const combinedId =
      currentUser.uid > selectedUser.uid
        ? currentUser.uid + selectedUser.uid
        : selectedUser.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create a chat in the chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // Update user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: selectedUser.uid,
            displayName: selectedUser.displayName,
            photoURL: selectedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", selectedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }

      // After initiating the chat, you can redirect to the chat page or perform other actions
      // For example, you can set a state to indicate that a chat has been initiated and
      // render a chat interface.
    } catch (err) {
      console.error("Error initiating chat: ", err);
    }

    // Clear the input field and reset the users list
    setUsername("");
    setUsers([]);
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="search"
          placeholder="Find a user"
          id="textInput"
          onInput={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          onChange={handleKey}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {users.map((user) => (
        <div
          key={user.uid}
          className="userChat"
          onClick={() => handleSelect(user)}
        >
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
