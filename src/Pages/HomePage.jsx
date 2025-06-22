import React from "react";
import Layout from "../Layout/Layout";
import Corosuel from "../Component/Corosuel";
import HomeContent from "../Component/HomeContent";
import LogoSlider from "../Component/LogoSlider";

function HomePage() {
  return (
    <div>
      {/* Optional: add some padding if needed */}
      <Layout>
        <Corosuel />
        <HomeContent />
        <LogoSlider/>
      </Layout>
    </div>
  );
}

export default HomePage;