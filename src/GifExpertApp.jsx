import { useState } from "react";

import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Naruto",
  ]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories((prevState) => prevState.concat(category));
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory onNewCategory={onAddCategory} />

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
