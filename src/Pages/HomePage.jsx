import React from "react";
import Layout from "../Layout/Layout";
import Corosuel from "../Component/Corosuel";
import HomeContent from "../Component/HomeContent";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col">
      {/* Optional: add some padding if needed */}
      <Layout>
        <Corosuel />
        <HomeContent />
      </Layout>
    </div>
  );
}

export default HomePage;