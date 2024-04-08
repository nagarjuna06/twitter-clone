import FeatureUpdate from "@/components/FeatureUpdate";
import Header from "@/components/Sidebars/Header";
import React from "react";

const ListsPage = () => {
  return (
    <div className="h-full">
      <Header>
        <p>Lists</p>
      </Header>
      <FeatureUpdate />
    </div>
  );
};

export default ListsPage;
