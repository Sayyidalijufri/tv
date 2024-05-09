"use client";
import React, { useState } from "react";
import CategoryPills from "./CategoryPills";
import { Categories } from "@/categories";

type Props = {};

function CategoryHeader({}: Props) {
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
  return (
    <div className="sticky top-0 bg-white z-10 pb-4">
      <CategoryPills
        categories={Categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </div>
  );
}

export default CategoryHeader;
