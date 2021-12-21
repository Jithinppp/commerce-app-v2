import React from "react";
import {
  MainContainer,
  TitleContainer,
  MainTitle,
  MainSubtitle,
  ShopImage,
} from "./homeBanner.styled";
import ecommerce from "../../Layouts/images/ecommerce.png";

const HomeBanner = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Shop online from</MainTitle>
        <MainSubtitle>Clothings.com</MainSubtitle>
      </TitleContainer>
      <ShopImage src={ecommerce} alt="ecommerce" />
    </MainContainer>
  );
};

export default HomeBanner;
