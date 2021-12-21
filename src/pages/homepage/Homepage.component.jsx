import React from "react";
import Directory from "../../components/directory/Directory.component";
import Footer from "../../components/footer/Footer.component";
import HomeBanner from "../../components/home-banner/HomeBanner.component";

const Homepage = (props) => {
  console.log(props);
  return (
    <div>
      <HomeBanner />
      <Directory />
      <Footer />
    </div>
  );
};

export default Homepage;
