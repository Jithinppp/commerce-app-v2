import React from "react";
import {
  FooterContainer,
  SubContainer,
  ContactContainer,
  AboutContainer,
  IconsContainer,
  Contact,
  ContactText,
  AboutTitle,
} from "./Footer.styed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <SubContainer>
        <ContactContainer>
          <Contact>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <ContactText>Malappuram 676517</ContactText>
          </Contact>
          <Contact>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <ContactText>9895956066</ContactText>
          </Contact>
          <Contact>
            <FontAwesomeIcon icon={faEnvelope} />
            <ContactText>jithinp968@gmail.com</ContactText>
          </Contact>
        </ContactContainer>
        <AboutContainer>
          <AboutTitle>About the company</AboutTitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab .
        </AboutContainer>
      </SubContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithubSquare} />
        <FontAwesomeIcon icon={faInstagram} />
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
