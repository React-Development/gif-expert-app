import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Naruto",
  ]);

  const onAddCategory = () => {
    setCategories((prevState) => prevState.concat("Bleach"));
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <input type="text" />

      {/* gif list */}
      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ol>
      {/* gif item */}
    </>
  );
};
