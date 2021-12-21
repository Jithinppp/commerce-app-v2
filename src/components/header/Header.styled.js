import styled from "styled-components";

export const HeaderContainer = styled.header``;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  color: black;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -1px;
  cursor: pointer;

  color: #202c39;
  text-decoration: underline;
`;
