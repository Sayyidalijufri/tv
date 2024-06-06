"use client";
import React, { useState } from "react";
import CategoryPills from "./CategoryPills";

type Props = {};

const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Coding",
  "Hacking",
  "Next.js",
  "React.js",
  "Vite.js",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
];

function CategoryHeader({}: Props) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="sticky top-0 bg-white z-10 pb-4">
      <CategoryPills
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </div>
  );
}

export default CategoryHeader;
