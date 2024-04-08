import FeatureUpdate from "@/components/FeatureUpdate";
import Header from "@/components/Sidebars/Header";
import React from "react";

const MessagesPage = () => {
  return (
    <div className="h-full">
      <Header>
        <p>Messages</p>
      </Header>
      <FeatureUpdate />
    </div>
  );
};

export default MessagesPage;
