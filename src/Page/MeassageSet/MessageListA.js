import React, { useState } from "react";

import { ImCross } from "react-icons/im";

import {
  CardField,
  CardContainer,
  CardContent,
  MessageSetAdded,
} from "../../Component/Style";

import { Card } from "../../Component/Style";
import { useNavigate } from "react-router-dom";

const MessageList = (props) => {
  const navigate = useNavigate();
  console.log("props", props.users);

  return (
    <CardContainer>
      <CardField>
        {props.users.map((user) => (
          <CardContent>
            <Card key={user.id} onClick={() => navigate("/messagereply")}>
              {user.name}
            </Card>

            <MessageSetAdded>
              <div>
                <ImCross className="cross" value="Click to Open Popup" />
              </div>
            </MessageSetAdded>
          </CardContent>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default MessageList;
