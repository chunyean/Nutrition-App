import React, { useState } from "react";
import Input from "@mui/base/Input";
import RecipeResult from "./RecipeResult";

const StandardRecipe = () => {
  const [recipe, setRecipe] = useState("");
  const [mainIngr, setMainIngr] = useState("");
  const [numIngr, setNumIngr] = useState();
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");

  const cuisineType = [
    "",
    "American",
    "Asia",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "Frech",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
  ];

  const typeOfMeal = ["", "Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

  const getData = async () => {
    const res = await fetch(
      import.meta.env.VITE_RECIPE +
        mainIngr +
        "&app_id=49aafab7&app_key=d73fbaad7c9f0874fe490b07de22a5d7&" +
        numIngr +
        "&cuisineType=" +
        cuisine +
        "&mealType=" +
        mealType +
        "&imageSize=REGULAR"
    );
    const data = await res.json();
    setRecipe(data);
  };

  const handleMainIngr = (e) => {
    const data = e.target.value;
    setMainIngr(data);
  };

  const handleNumIngr = (e) => {
    const data = e.target.value;
    setNumIngr(data);
  };

  const handleCuisine = (e) => {
    const data = e.target.value;
    setCuisine(data);
  };

  const handleMealType = (e) => {
    const data = e.target.value;
    setMealType(data);
  };

  return (
    <div className="container-md lg xl xxl">
      <div className="row-md lg xl xxl">
        <h3>You can search any recipe by fill up the part at below</h3>
      </div>
      <div className="container-md lg xl xxl">
        <h5>Main Ingredient</h5>
        <Input
          type="text"
          className="focus:shadow-outline-purple"
          placeholder="ex: chicken, pork"
          onChange={handleMainIngr}
        />
        <h5>Number of Ingredient</h5>
        <Input
          type="text"
          className="text"
          placeholder="ex: 1,2,3 or 2-5"
          onChange={handleNumIngr}
        ></Input>
        <h5>Select Cuisine</h5>
        <select onClick={handleCuisine}>
          {cuisineType.map((item, idx) => {
            return (
              <option key={idx} id={idx}>
                {item}
              </option>
            );
          })}
        </select>
        <h5>Type of Meal</h5>
        <select onClick={handleMealType}>
          {typeOfMeal.map((item, idx) => {
            return (
              <option key={idx} id={idx}>
                {item}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <button type="button" onClick={getData}>
          Submit
        </button>
      </div>
      {recipe && <RecipeResult recipe={recipe}></RecipeResult>}
    </div>
  );
};

export default StandardRecipe;
