import React, { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import RecipeDetails from "./RecipeDetails";

const RecipeResult = (props) => {
  const [imageData, setImageData] = useState();

  const getImageData = (item) => {
    setImageData(item);
  };

  return (
    <div className="col-md-12 lg">
      <div onClick={() => getImageData(props.item)}>
        <ImageListItem sx={{ width: 300, height: 300, cols: 3 }}>
          <img id={props.id} src={props.item.recipe.image} loading="lazy" />
          <ImageListItemBar title={props.item.recipe.label} />
        </ImageListItem>
      </div>
      {imageData && <RecipeDetails imageData={imageData}></RecipeDetails>}
    </div>
  );
};

export default RecipeResult;
