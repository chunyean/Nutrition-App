import React, { useState } from "react";
import RecipeSearch from "./RecipeSearch";
import { Link } from "react-router-dom";

const StandardRecipe = () => {
  const [recipe, setRecipe] = useState("");
  const [mainIngr, setMainIngr] = useState("pork");
  const [numIngr, setNumIngr] = useState(4);
  const [cuisine, setCuisine] = useState("Chinese");
  const [mealType, setMealType] = useState("Lunch");

  const cuisineType = [
    "",
    "American",
    "Asia",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
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
        import.meta.env.VITE_RECIPE_APIKEY +
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
    <div className="standard">
      <div className="container3 md lg xl xxl">
        <div className="row-md lg xl xxl">
          <h3>
            You can search any recipe by fill up the part
            <br /> at below:
          </h3>
        </div>
        <br />
        <div className="container-md lg xl xxl">
          <h5>Main Ingredient</h5>
          <input
            type="text"
            className="focus:shadow-outline-purple"
            placeholder="ex: chicken, pork"
            onChange={handleMainIngr}
          />
          <h5>Number of Ingredient</h5>
          <input
            type="text"
            className="text"
            placeholder="ex: 1,2,3 or 2-5"
            onChange={handleNumIngr}
          ></input>
          <h5>Select Cuisine</h5>
          <select onChange={handleCuisine}>
            {cuisineType.map((item, idx) => {
              return (
                <option key={idx} id={idx}>
                  {item}
                </option>
              );
            })}
          </select>
          <h5>Type of Meal</h5>
          <select onChange={handleMealType}>
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
          <button className="btn btn-info" type="button" onClick={getData}>
            Submit
          </button>
        </div>
        <Link to="/">
          <img
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png"
            id="home3"
          ></img>
        </Link>
        {recipe && <RecipeSearch recipe={recipe}></RecipeSearch>}
      </div>
    </div>
  );
};

export default StandardRecipe;
