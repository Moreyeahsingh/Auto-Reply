import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  background: ${(props) => (props.background ? props.background : "#fff")};

  padding: 1vmax 1vmax;

  border-radius: 10px;
  border: 2px solid #7b7979;
  font-size: 15px;
  color: #2c3e50;
  font-weight: 700;
  box-shadow: 0px 1px 0px 1px #888888;

  width: 355px;

  height: 55px;

  input {
    font-weight: 600 !important;
  }
  &.search-input {
    input {
      background: #fff !important;
    }
  }
`;
export const Select = styled.select`
  background: ${(props) => (props.background ? props.background : "#fff")};
  border-radius: 00px;
  padding: 1vmax 1vmax;
  border: 1px solid #c4c6c8;
  width: 345px;
  color: black;
  height: 55px;
  font-size: 16px;
  font-weight: 500;
  input {
    font-weight: 600 !important;
  }
  &.search-input {
    input {
      background: #fff !important;
    }
  }
`;

export const Label = styled.label`
  font-size: 40px !important;
  font-weight: 800;
  color: #b0b0b0;
  font-size: 20px;
  line-height: 24px;
  color: #ff0000;
`;
