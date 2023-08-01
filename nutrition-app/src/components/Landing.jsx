import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Navigation = () => {
  return (
    <>
      <div className="container1">
        <h1>Welcome to Nutrition APP</h1>
        <h4>You can search whatever ingredient nutrition at here.</h4>
      </div>
      <div className="row">
        <div className="column1">
          <img
            src="https://s30386.pcdn.co/wp-content/uploads/2020/02/p1bm5844cb6oacnd1std183s12gt6.jpg.webp"
            className="nutrition"
          ></img>
          LOVE Nutrition
        </div>
        <div className="column2">
          <Link to="/single-ingredient-search">
            <img
              src="https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg"
              className="image1"
            ></img>
          </Link>
          <p className="p">Search Individual Ingredient</p>
          <Link  to="/personal-recipe-search">
            <img
              src="https://savourycatering.com.sg/wp-content/uploads/2023/02/Why-Home-Cooked-Food-Delivery-is-Better-Than-Takeouts-scaled.jpg"
              className="image2"
            ></img>
          </Link>
          <p className="p2">Personal Recipe</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
