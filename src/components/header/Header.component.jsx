import React from "react";

import { HeaderContainer, Logo, Button, Nav } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Clothings</Logo>
        <Button>Sign Up</Button>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
