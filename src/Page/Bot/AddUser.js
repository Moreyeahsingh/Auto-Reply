import React, { useState } from "react";
import Button from "../../Component/CustomButton/index";
import {
  ButtonField,
  SubHeaderContainer,
  SubText,
  SubHeaderField,
} from "../Style/AddMessageStyle";
import { Bot } from "../../mobx/MobxStore";
import { observer } from "mobx-react-lite";

import Popup from "../../Component/_shared/Popup";

const AddUser = (props) => {
  const [botName, setBotName] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  // const botName = useSelector(setBotName);

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
      props.addUserHandler(botName);
      setBotName("");
      togglePopup();
    }
  };

  return (
    <SubHeaderContainer>
      <SubHeaderField>
        <SubText>Existing Bot</SubText>
        <ButtonField>
          <Button
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          >
            New Bot
          </Button>

          {isOpen && (
            <Popup
              content={
                <>
                  <div className="popup-contant">
                    <div className="popup-input-field">
                      <label className="reply-popup-head">New Bot</label>
                      <input
                        id="BotWord"
                        className="popupInput"
                        placeholder="Example Bot B"
                        type="text"
                        onChange={(e) => {
                          setBotName(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      className="popupButton"
                      role="button"
                      onClick={() => addBotHandler()}
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

export default observer(AddUser);

/* CSS */
