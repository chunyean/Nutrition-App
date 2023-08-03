import React from "react";
import ImageList from "@mui/material/ImageList";
import RecipeResult from "./RecipeResult";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from '@mui/material/ListSubheader';

const RecipeSearch = (props) => {
  const data = props.recipe;

  return (
    <ImageList sx={{ width: 1230, height: 1000 }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Search Result</ListSubheader>
      </ImageListItem>
        {data?.hits.map((item, idx) => (
          <RecipeResult key={idx} id={idx} item={item}></RecipeResult>
        ))}
    </ImageList>
  );
};

export default RecipeSearch;
