import React, { useState } from "react";
import Button from "../../Component/CustomButton";
import Popup from "../../Component/_shared/Popup";
import {
  SubHeaderField,
  SubTextSet,
  ButtonField,
  SubHeaderContainer,
} from "../Style/AddMessageStyle";

import { useNavigate } from "react-router-dom";

const AddMessage = (props) => {
  const navigate = useNavigate();
  const [botName, setBotName] = useState("");
  const [usernameErr, setusernameErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handelpopup = () => {
    togglePopup();
  };
  const addBotHandler = () => {
    console.log("first");
    if (botName.trim() === "") {
    } else {
      console.log("first");
      props.addMessageHandler(botName);

      setBotName("");
      togglePopup();
      // props.addUserHandler(botName);
    }
  };
  return (
    <SubHeaderContainer>
      <SubHeaderField>
        <SubTextSet>Bot Message </SubTextSet>
        <ButtonField>
          <Button
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          >
            New Set
          </Button>

          <Button onClick={() => navigate("/autosetting")}>Setting</Button>

          {isOpen && (
            <Popup
              content={
                <>
                  <div className="popup-contant">
                    <div className="popup-input-field">
                      <label className="reply-popup-head">
                        Add New Message Add
                      </label>
                      <input
                        id="BotWord"
                        className="popupInput"
                        placeholder="Example Message Set 2"
                        type="text"
                        onChange={(e) => {
                          setBotName(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      className="popupButton"
                      onClick={() => {
                        addBotHandler();
                      }}
                    >
                      Submit
                    </button>
                    <button
                      className="popup-Cancel-Button"
                      role="button"
                      onClick={handelpopup}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              }
            />
          )}
        </ButtonField>
      </SubHeaderField>
    </SubHeaderContainer>
  );
};

export default AddMessage;
