import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import RecipeResult from "./RecipeResult";

const RecipeSearch = (props) => {
  const data = props.recipe;
  const [imageData, setImageData] = useState();

  const getImageData = (item) => {
    console.log(item);
    setImageData(item);
  };

  return (
    <div>
      <h2>Search Result</h2>

      <ImageList sx={{ width: 600, height: 600 }}>
        {data?.hits.map((item, idx) => (
          <RecipeResult
            key={idx}
            id={idx}
            item={item}
            onClick={getImageData}
          ></RecipeResult>
        ))}
      </ImageList>
    </div>
  );
};

export default RecipeSearch;
