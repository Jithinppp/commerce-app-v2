import React from "react";
import {
  Container,
  MenuItemContainer,
  Title,
  SubTitle,
} from "./menuItem.styled";

const MenuItems = ({ title, imageUrl }) => {
  return (
    <Container>
      <MenuItemContainer style={{ backgroundImage: `url(${imageUrl})` }}>
        <Title>{title}</Title>
        <SubTitle>Shop now</SubTitle>
      </MenuItemContainer>
    </Container>
  );
};

export default MenuItems;
