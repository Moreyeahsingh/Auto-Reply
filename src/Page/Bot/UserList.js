import React from "react";
import { Card } from "../../Component/_shared/Card";
import { CardField } from "../../Component/Style";
import { CardContainer } from "../../Component/Style";
import { useNavigate } from "react-router-dom";

const UserList = (props) => {
  const navigate = useNavigate();
  console.log("props", props);

  return (
    <CardContainer>
      <CardField>
        {props.users.map((user, index) => (
          <Card
            key={user.id}
            onClick={() =>
              navigate(`/messageset`, { data: props.users, index })
            }
          >
            {user.name}
          </Card>
        ))}
      </CardField>
    </CardContainer>
  );
};

export default UserList;
