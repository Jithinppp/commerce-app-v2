import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  justify-content: center; */
`;
export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 100px;
  background-color: #fff;
  margin: 30px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background-position: center;
  background-size: cover;
  transition: all 0.1s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const SubTitle = styled.a`
  font-weight: 400;
  cursor: pointer;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 15px;
`;
