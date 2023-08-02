import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SingleIngrSearch from "./components/SingleIngrSearch";
import PersonalRecipeSearch from "./components/PersonalRecipeSearch";
import Landing from "./components/Landing";
import StandardRecipe from "./components/StandardRecipe";
import RecipeDetails from "./components/RecipeDetails";

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
