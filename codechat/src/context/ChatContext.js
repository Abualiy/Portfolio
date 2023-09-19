import { createContext, useContext, useReducer, } from "react";
import { AuthContext } from "./AuthContext";

// Create the ChatContext
export const ChatContext = createContext();

// Define the ChatContextProvider component
export const ChatContextProvider = ({ children }) => {
    // Access the current user from AuthContext using useContext
    const { currentUser } = useContext(AuthContext);

    // Initial state for the chat context
    const INITIAL_STATE = {
        chatId: "null",
        user: {},
    };

     // Reducer function to handle state updates
    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                 // Determine the chat ID based on user IDs
                return {
                    user: action.payload,
                    chatId:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid,
                };

            default:
                return state;
        }
    };

    // Use useReducer to manage state with the chatReducer and INITIAL_STATE
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        // Provide the state and dispatch function to the ChatContext
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};