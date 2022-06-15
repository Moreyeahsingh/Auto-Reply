import React from "react";
import {
  CardContainer,
  CardField,
  MessageSetAdded,
} from "../../Component/Style";
// import { Card } from "./Style";
// import { CardField } from "../Style";
// import { CardContainer } from "../Style";
import { Card } from "../MeassageSet/MessageStyle";
import { CardContent } from "../../Component/Style";

import { ImCross } from "react-icons/im";
const MessageReplyList = (props) => {
  console.log("props", props.users);

  return (
    <CardContainer>
      <CardField>
        {props.users.map((user) => (
          <CardContent>
            <Card key={user.id}> {user.name}</Card>

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

export default MessageReplyList;
