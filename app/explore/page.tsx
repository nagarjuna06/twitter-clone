import FeatureUpdate from "@/components/FeatureUpdate";
import Header from "@/components/Sidebars/Header";
import React from "react";

const ExplorePage = () => {
  return (
    <div className="h-full">
      <Header>
        <p>Explore</p>
      </Header>
      <FeatureUpdate />
    </div>
  );
};

export default ExplorePage;
