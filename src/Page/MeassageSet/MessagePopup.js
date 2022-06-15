import React from "react";
import {
  Box,
  PopupBox,
  PopupContainer,
} from "../../Component/StyleComponent/Popup";
import Wronge from "../../assets/Wronge.png";

const Popup = (props) => {
  return (
    <PopupContainer>
      <PopupBox>
        <Box style={{ width: "328px", height: "227px" }}>
          {/* <span className="close-icon" onClick={props.handleClose}>

          </span> */}
          {props.content}
        </Box>
      </PopupBox>
      3
    </PopupContainer>
  );
};

export default Popup;
