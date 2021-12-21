import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const ShopImage = styled.img`
  height: 500px;
  width: auto;
  margin: 0 20px;
`;

export const MainTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: -4px;
  font-weight: 700;
  color: #202c39;
  margin: 10px 0px;
`;
export const MainSubtitle = styled.span`
  font-size: 2rem;
  font-weight: 600;
  text-decoration: underline;
  letter-spacing: -2px;
  color: #202c39;
  &:hover {
    cursor: pointer;
  }
`;
