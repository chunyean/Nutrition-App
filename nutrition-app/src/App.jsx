import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SingleIngrSearch from "./SingleIngredient/SingleIngrSearch";
import PersonalRecipeSearch from "./PersonalRecipe/PersonalRecipeSearch";
import Landing from "./SingleIngredient/Landing";
import StandardRecipe from "./StandardRecipe/StandardRecipe";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route
          path="/single-ingredient-search"
          element={<SingleIngrSearch></SingleIngrSearch>}
        />
        <Route
          path="/personal-recipe-search"
          element={<PersonalRecipeSearch></PersonalRecipeSearch>}
        />
        <Route
          path="/standard-recipe-search"
          element={<StandardRecipe></StandardRecipe>}
        />
      </Routes>
    </>
  );
}

export default App;
