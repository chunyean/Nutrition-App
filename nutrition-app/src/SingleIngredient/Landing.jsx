import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Calculator from "../Calculator/Calculator";

const Navigation = () => {
  return (
    <>
      <div className="container1 md">
        <h1>Welcome to Nutrition APP</h1>
        <h4>You can search whatever ingredient nutrition at here.</h4>
      </div>
      <div className="row md lg">
        <div className="column1 col-md-4">
          <img
            src="https://s30386.pcdn.co/wp-content/uploads/2020/02/p1bm5844cb6oacnd1std183s12gt6.jpg.webp"
            className="nutrition"
          ></img>
          LOVE Nutrition
        </div>
        <div className="column2 col-md-4">
          <Link to="/single-ingredient-search">
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="image1"
            ></img>
          </Link>
          <p className="p">Search Individual Ingredient</p>
          <Link to="/personal-recipe-search">
            <img
              src="https://savourycatering.com.sg/wp-content/uploads/2023/02/Why-Home-Cooked-Food-Delivery-is-Better-Than-Takeouts-scaled.jpg"
              className="image1"
            ></img>
          </Link>
          <p className="p">Personal Recipe</p>
        </div>
        <div className="column2 col-md-4">
          <Link to="/standard-recipe-search">
            <img
              src="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2020/10/bigstock-Modern-Food-Stylist-Decorating-253975528-1.jpg"
              className="image1"
            ></img>
          </Link>
          <p className="p">Standard Recipe</p>
          <Link to="/calculator">
            <img
              src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png"
              className="image1"
            ></img>
          </Link>
          <p className="p">Calories Calculator</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
