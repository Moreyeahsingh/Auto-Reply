import React from "react";
import { Box, PopupBox, PopupContainer } from "../StyleComponent/Popup";
import Wronge from "../../assets/Wronge.png";
import { ImCross } from "react-icons/im";
const Popup = (props) => {
  return (
    <PopupContainer>
      <PopupBox>
        <Box>{props.content}</Box>
      </PopupBox>
    </PopupContainer>
  );
};

export default Popup;
