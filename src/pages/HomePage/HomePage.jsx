import React from "react";
import CategorySection from "../../components/CategorySection";
import CategoryDisplayCard from "../../components/CategoryDisplayCard/CategoryDisplayCard";

export const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome</h1>
      <CategorySection>
        <CategoryDisplayCard category="ceramics" title="Ceramics" />
        <CategoryDisplayCard category="plants" title="Plants" />
        <CategoryDisplayCard category="art" title="Art" />
      </CategorySection>
    </div>
  );
};
t