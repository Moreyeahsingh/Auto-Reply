import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Popup from "./MessagePopup";
const MessageEditPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <BiEditAlt value="Click to Open Popup" onClick={togglePopup} />
      {isOpen && (
        <Popup
          content={
            <>
              <div className="popup-contant">
                <label className="reply-popup-head">
                  {/* Message Set Name */}
                </label>
                <input
                  // id="BotWord"
                  className="popupInput"
                  // placeholder="Example Message Set 2"
                  // type="text"
                />
                <button className="BotSubmitbutton">Submit</button>

                <button className="BotSubmitbutton">Cancil</button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default MessageEditPopup;
