import styled from "styled-components";
export const PopupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  position: relative;

  width: 328px;
  height: 227px;
  align-items: center;
  background: #0c0c0c;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  flex-wrap: wrap;
  flex-direction: column;
  overflow: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const PopupContainer = styled.div`
  position: fixed;

  width: 16%;
  height: auto;
`;
