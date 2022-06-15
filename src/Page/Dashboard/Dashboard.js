import React, { useState, useEffect } from "react";

import UserList from "../Bot/UserList";

import AddUser from "../Bot/AddUser";
import { Bot } from "../../mobx/MobxStore";

const Dashboard = () => {
  const [usersList, setUsersList] = useState([
    { name: "bot A", id: Math.random().toString() },
  ]);
  const addUserHandler = (uname) => {
    var botData = Bot.initialState.bot;
    Bot.setBotName([...botData, { name: uname, id: Math.random().toString() }]);
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: uname, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <div className="main-container">
        <div>
          <AddUser addUserHandler={addUserHandler} />
        </div>
        <div>
          <UserList users={Bot.initialState.bot} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
