import React from "react";
import Layout from "../Layout/Layout";
import Corosuel from "../Component/Corosuel";
import HomeContent from "../Component/HomeContent";
import LogoSlider from "../Component/LogoSlider";
import HomeProduct from "../Component/HomeProduct";

function HomePage() {
  return (
    <div>
      <Layout>
        <Corosuel />
        <HomeContent />
        <LogoSlider />
        <HomeProduct/>
      </Layout>
    </div>
  );
}

export default HomePage;
