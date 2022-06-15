import React, { useState } from "react";
// import AddMessage from "./AddMessage";
// import AddMessageReply from "./AddMessageReply";
// import MessageReplyList from "./MessageReplyList";
// import Header from "../Header";
// import AddMessage from "../MeassageSet/AddMessage";
// import AddMessageReply from "./AddMessageReply";
// import MessageReplyList from "../../../Component/MessagReply/MessageReplyList";

import AddMessageReply from "./AddMessageReply";
import MessageReplyList from "./MessageReplyList";
const MessageReply = () => {
  const [messageReplyList, setMessageReplyList] = useState([
    { name: "Message Reply 1", id: Math.random().toString() },
  ]);
  const AddMessageReplyHandler = (uname) => {
    setMessageReplyList((prevUsers) => {
      return [...prevUsers, { name: uname, id: Math.random().toString() }];
    });
  };

  return (
    <div className="main-container">
      <div className="Header-container ">
        <div>
          <AddMessageReply AddMessageReplyHandler={AddMessageReplyHandler} />
        </div>
        <div>
          <MessageReplyList users={messageReplyList} />
        </div>
      </div>
    </div>
  );
};

export default MessageReply;
