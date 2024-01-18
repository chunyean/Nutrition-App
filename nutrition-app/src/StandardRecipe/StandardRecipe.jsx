import React, { useState } from "react";
import RecipeSearch from "./RecipeSearch";
import { Link } from "react-router-dom";
import "../SingleIngredient/Allcomponents.css";

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

  //function to get data
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
    disabled = "false";
    setMainIngr("");
    setNumIngr("");
    setCuisine("");
    setMealType("");
  };

  //function to get main ingredient
  const handleMainIngr = (e) => {
    const data = e.target.value;
    setMainIngr(data);

    const letters = /^[A-Za-z\s\n\b\']+$/;
    if (data.length === 0) {
      return;
    } else if (!data.match(letters)) {
      return alert("ERROR! No number is allow");
    }
  };

  //function to get number of ingredient
  const handleNumIngr = (e) => {
    const data = e.target.value;
    setNumIngr(data);

    if (isNaN(data)) {
      return alert("ERROR! Please keyin number between 1-10");
    }
  };

  //function to get cuisine
  const handleCuisine = (e) => {
    const data = e.target.value;
    setCuisine(data);
  };

  //fucntion to get meal type
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
        <div className="col-md-12 lg xl xxl">
          <form className="form">
            <h5>Main Ingredient</h5>
            <input
              type="text"
              className="text"
              placeholder="ex: chicken, pork"
              onChange={handleMainIngr}
            />
            <h5>Number of Ingredient</h5>
            <input
              type="text"
              className="text"
              min={5}
              max={15}
              maxLength={2}
              pattern="[5-15]"
              placeholder="number start from 5 until 15."
              required
              onChange={handleNumIngr}
            ></input>

            <h5>Select Cuisine</h5>
            <select className="text" onChange={handleCuisine}>
              {cuisineType.map((item, idx) => {
                return (
                  <option key={idx} id={idx}>
                    {item}
                  </option>
                );
              })}
            </select>
            <h5>Type of Meal</h5>
            <select className="text" onChange={handleMealType}>
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
            <button
              className="btn btn-info"
              type="button"
              disabled={!(mainIngr && numIngr && cuisine && mealType)}
              onClick={getData}
            >
              Submit
            </button>
          </form>
        </div>
        {recipe && <RecipeSearch recipe={recipe}></RecipeSearch>}
      </div>
      <div className="container md lg">
        <div className="row md lg">
          <div className="col-md-11"></div>
          <div className="col-md-1">
            <Link to="/">
              <img
                src="../return.256x233.png"
                id="home3"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardRecipe;
