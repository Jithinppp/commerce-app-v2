import React from "react";
import { Container, Title, MenuItem, SubTitle } from "./styled/HomePage.styled";

const Homepage = () => {
  return (
    <Container>
      <MenuItem>
        <Title>Hats</Title>
        <SubTitle>Shop now</SubTitle>
      </MenuItem>
      <MenuItem>
        <Title>Jackets</Title>
        <SubTitle>Shop now</SubTitle>
      </MenuItem>
      <MenuItem>
        <Title>Sneakers</Title>
        <SubTitle>Shop now</SubTitle>
      </MenuItem>
      <MenuItem>
        <Title>Womens</Title>
        <SubTitle>Shop now</SubTitle>
      </MenuItem>
      <MenuItem>
        <Title>Mens</Title>
        <SubTitle>Shop now</SubTitle>
      </MenuItem>
    </Container>
  );
};

export default Homepage;
