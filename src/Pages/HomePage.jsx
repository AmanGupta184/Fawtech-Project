import React from "react";
import Layout from "../Layout/Layout";
import Corosuel from "../Component/Corosuel";
import HomeContent from "../Component/HomeContent";

function HomePage() {
  return (
    <Layout>
      <Corosuel/>
      <HomeContent/>
    </Layout>
  );
}

export default HomePage;
