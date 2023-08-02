import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";

const RecipeResult = (props) => {
  return (
    <div onClick={() => props.onClick(props.item)}>
      <ImageListItem>
        <img
          key={props.key}
          id={props.id}
          src={props.item.recipe.image}
          loading="lazy"
          //   title={props.item}
        />
        <ImageListItemBar title={props.item.recipe.label} />
      </ImageListItem>
    </div>
  );
};

export default RecipeResult;
