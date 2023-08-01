import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Navigation = () => {
  return (
    <>
    <h2>Welcome to Nutrition World</h2>
    <h4>You can search whatever ingredient nutrition at here.</h4>
      <div className="container">
        <Link to="/single-ingredient-search">
          <img
            src="https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg"
            className="image1"
          ></img>
        </Link>
        <Link to="/personal-recipe-search">
          <img
            src="https://savourycatering.com.sg/wp-content/uploads/2023/02/Why-Home-Cooked-Food-Delivery-is-Better-Than-Takeouts-scaled.jpg"
            className="image2"
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
