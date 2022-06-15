import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddMessage from "./AddMessage";

import MessageList from "./MessageListA";

// import { useNavigate } from "react-router-dom";

const MessageSet = (props) => {
  // const Navigate = useNavigate();
  const location = useLocation();
  console.log("bawa props aaagye", location);
  const [messageList, setMessageList] = useState([
    { name: "Message 1", id: Math.random().toString() },
  ]);
  const addMessageHandler = (uname) => {
    setMessageList((prevUsers) => {
      return [...prevUsers, { name: uname, id: Math.random().toString() }];
    });
  };

  return (
    <div className="main-container">
      <div className="Header-container ">
        <div>
          <AddMessage addMessageHandler={addMessageHandler} />
        </div>
        <div>
          <MessageList users={messageList} />
        </div>
      </div>
    </div>
  );
};

export default MessageSet;
