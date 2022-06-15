import styled from "styled-components";

export const Card = styled.div`
  width: 335px;
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
export const SettingMainContainer = styled.div`
  width: 100%;

  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: black;
`;
export const SettingContainer = styled.div`
  width: 80%;
  height: 500px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 200px;

  color: red;
  background-color: black;
  padding: 30px;
  border-radius: 30px;
  border: 5px solid red;
  @media only screen and (max-width: 1300px) {
    width: 82%;
    height: auto;

    border-radius: 30px;
    border: 5px solid red;
  }
  @media only screen and (max-width: 1300px) {
    width: 60%;

    border-radius: 30px;
    border: 5px solid red;
  }
`;
export const SettingField = styled.div`
  flex-direction: coloum;
  width: 35%;
  @media only screen and (max-width: 1300px) {
    width: 26%;
  }
  @media only screen and (max-width: 1300px) {
    width: 18%;
  }
`;
export const SettingHead = styled.h1`
  font-size: 40px;

  font-weight: 750;
`;
export const SettingHeadField = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const SettingField1 = styled.div`
  flex-direction: coloum;
  width: 35%;
`;
export const SettingContaintField = styled.h1`
width:100%
display: flex;
justify-content: space-around;
align-item: center;

`;
export const SettingFieldSleepTimer = styled.div`
  flex-direction: coloum;
`;
export const SettingContant1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const SettingContant2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SettingLabel = styled.div`
  font-size: 40px;
  font-weight: 750;
  margin-top: 40px;
  @media only screen and (max-width: 1700px) {
    font-size: 32px;
    font-weight: 650;
    margin-top: 30px;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 24px;
    font-weight: 550;
    margin-top: 22px;
  }
`;
export const SettingText = styled.div`
  font-size: 30px;
  font-weight: 750;
  opacity: 0.8;
  @media only screen and (max-width: 1700px) {
    font-size: 26px;
    font-weight: 550;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 21px;
    font-weight: 550;
  }
`;

export const SettingTextField = styled.div`
  width: 100px;
  height: 30px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 750px;
  margin-top: 10px;
  @media only screen and (max-width: 1700px) {
    width: 80px;
    height: 25px;

    font-size: 16px;
    font-weight: 650px;
    margin-top: 8px;
  }
`;

export const TextField = styled.input`
  border: 3px solid #000;
  border-radius: 15px;
  background-color: #bbbcbc;
  height: 50px;
  line-height: normal;
  color: #282828;
  display: block;
  width: 100%;
  box-sizing: border-box;
  user-select: auto;
  font-size: 16px;
  padding: 0 6px;
  padding-left: 12px;

  ::placeholder {
    color: #8c8e8e;
  }

  :focus {
    border: 3px solid #5551ff;
  }
`;

// export const TextField = styled.input`
//   border: 3px solid #000;
//   border-radius: 5px;

//   height: 50px;
//   line-height: normal;
//   color: #282828;
//   display: block;
//   width: 100%;
//   box-sizing: border-box;
//   user-select: auto;
//   font-size: 16px;
//   padding: 0 6px;
//   padding-left: 12px;
//   :focus {
//     border: 3px solid #5551ff;
//   }
// `;
