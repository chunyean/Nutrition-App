import React, { useState } from "react";

const StandardRecipe = () => {
  const [recipe, setRecipe] = useState("");
  const [mainIngr, setMainIngr] = useState("");
  const [numIngr, setNumIngr] = useState();
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");

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

  const handleMainIngr = () => {
    setMainIngr(e.target.value)
  }

  const handleNumIngr = () => {
    setNumIngr(e.target.value)
  }

  const handleCuisine = () => {
    setCuisine(e.target.value)
  }

  const handleMealType = () => {
    setMealType(e.target.value)
  }

  return <div className="container-md lg xl xxl">
    <div className="row">
        <h3>You can search any recipe by fill up the part at below</h3>
        <input type="text"></input>
    </div>
  </div>;
};

export default StandardRecipe;
