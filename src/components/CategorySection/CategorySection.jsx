import React from "react";
import { CategoryCard } from "../CategoryCard/CategoryCard";

export const CategorySection = ({ children }) => {
  const categories = [
    {
      name: "Ceramics",
      path: "/shop/ceramics",
    },
    {
      name: "Art",
      path: "/shop/art",
    },
    {
      name: "Plants",
      path: "/shop/plants",
    },
    {
      name: "SoftwareDev",
      path: "/services/software-development",
    },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <p fw-bold>
          Browse handmade creations and professional services.
        </p>
      </div>

      <div className="row g-4 ">
        {categories.map((category) => (
          <div
            key={category.path}
            className="col-12 col-sm-6 col-lg-3 "
          >
            <CategoryCard name={category.name} path={category.path} />
          </div>
        ))}
      </div>
      {children}
    </section>
  );
};



export default CategorySection;
