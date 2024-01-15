import React, { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import RecipeDetails from "./RecipeDetails";

const RecipeResult = (props) => {
  const [imageData, setImageData] = useState();
  const [showModal, setShowModal] = useState(false);

  //function to get data from the photo user clicked
  const getImageData = (item) => {
    setImageData(item);
    setShowModal(true);
  };

  return (
    <div className="col-md-12 lg">
      <div onClick={() => getImageData(props.item)}>
        <ImageListItem sx={{ width: 300, height: 300, cols: 3 }}>
          <img id={props.id} src={props.item.recipe.image} loading="lazy" />
          <ImageListItemBar title={props.item.recipe.label} />
        </ImageListItem>
      </div>
      {showModal && imageData && <RecipeDetails imageData={imageData} setShowModal={setShowModal}></RecipeDetails>}
    </div>
  );
};

export default RecipeResult;
