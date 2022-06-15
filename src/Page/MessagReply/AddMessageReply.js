import React, { useState } from "react";

import Button from "../../Component/CustomButton";

import {
  SubTextSet,
  SubHeaderField,
  SubHeaderContainer,
  ButtonField,
} from "../Style/AddMessageStyle";

import Popup from "../../Component/_shared/Popup";

const AddMessageReply = (props) => {
  const [botName, setBotName] = useState("");
  const [usernameErr, setusernameErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handelpopup = () => {
    togglePopup();
  };
  const setBotName1 = () => {
    console.log("first");
    if (botName.trim() === "") {
    } else {
      console.log("first");
      props.AddMessageReplyHandler(botName);

      setBotName("");
      togglePopup();
      // props.addUserHandler(botName);
    }
  };

  return (
    <SubHeaderContainer>
      <SubHeaderField>
        <SubTextSet>A Message Sets 1</SubTextSet>
        <ButtonField>
          <Button
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          >
            New Reply
          </Button>

          {isOpen && (
            <Popup
              content={
                <>
                  <div className="popup-contant">
                    <div className="popup-input-field">
                      <label className="reply-popup-head">Add New Reply</label>
                      <input
                        id="BotWord"
                        className="popupInput"
                        placeholder="Example Hello "
                        type="text"
                        onChange={(e) => {
                          setBotName(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      className="popupButton"
                      onClick={() => {
                        console.log("first");

                        setBotName1();
                        // popupState.close();
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

export default AddMessageReply;
