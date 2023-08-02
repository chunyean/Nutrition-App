import React from "react";

const RecipeResult = (props) => {
  const data = props.recipe;
  return (
    <div>
      <select>
        {data.hits.map((item) => {
          return (
            <option value={item.recipe.label}>
              {item.recipe.label} <img src={item.recipe.images.SMALL.url}></img>
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default RecipeResult;
