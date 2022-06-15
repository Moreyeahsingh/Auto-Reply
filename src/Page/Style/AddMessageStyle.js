import styled from "styled-components";
export const SubHeaderContainer = styled.div`
  width: 100%;
  color: #fff;
  height: 100px;
  display: flex;
  position: absolute;
  margin-top: 120px;
  justify-content: center;
`;
export const SubHeaderField = styled.div`
  width: 80%;
  position: fixed;
  color: #fff;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
export const SubTextSet = styled.div`
  font-size: 40px;
  color: red;
  font-weight: 700;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const ButtonField = styled.div`
  margin-right: "50px";
`;
export const SubText = styled.h1`
  font-size: 35px;
  color: red;
  font-weight: 600;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 510px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 18px;
  }
  @media only screen and (max-width: 374px) {
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
  }
`;
export const Card = styled.div`
  width: 300px;
  height: 80px;

  background: #000000;
  border: 6px solid #ff0000;
  border-radius: 15px;

  background: #000000;

  margin: 20px;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
