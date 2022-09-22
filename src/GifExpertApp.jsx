import { useState } from "react";

import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Naruto",
  ]);

  const onAddCategory = (category) => {
    setCategories((prevState) => prevState.concat(category));
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategory={onAddCategory}
        currentCategories={categories}
      />

      {/* gif list */}
      <ol>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ol>
      {/* gif item */}
    </>
  );
};
