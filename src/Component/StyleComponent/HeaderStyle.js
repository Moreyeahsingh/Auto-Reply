import styled from "styled-components";
export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  background: black;
  position: fixed;

  box-shadow: 0px 4px 34px rgba(255, 0, 0, 0.15);
  backdrop-filter: blur(30px);
`;
//

export const Logout = styled.div`
  margin-left: 1330px;
  @media screen and (max-width: 800px) {
    margin-left: 400px;
  }
`;
export const Headerheading = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;

  text-transform: capitalize;

  color: #ff0000;
`;
