import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories((prevState) => prevState.concat(category));
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};
