import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const ContactContainer = styled.div`
  margin: 0 100px;
`;
export const AboutContainer = styled.div`
  margin: 0 30px;
  width: 400px;
`;
export const IconsContainer = styled.div`
  font-size: 2.5rem;
  margin: 20px;
  & > * {
    margin: 0 20px;
    cursor: pointer;
  }
`;
export const Contact = styled.div`
  margin: 10px 0px;
`;
export const ContactText = styled.span`
  margin-left: 20px;
`;

export const AboutTitle = styled.h4`
  font-size: 1rem;
`;
