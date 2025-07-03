import React from "react";
import Layout from "../Layout/Layout";
import Corosuel from "../Component/Corosuel";
import HomeContent from "../Component/HomeContent";
import LogoSlider from "../Component/LogoSlider";
import HomeProduct from "../Component/HomeProduct";
import Graph from "../Component/Graph";

function HomePage() {
  return (
    <div>
      <Layout>
        <HomeContent />
        <Corosuel />
        <LogoSlider />
        <Graph/>
        <HomeProduct/>
      </Layout>
    </div>
  );
}

export default HomePage;
