import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SingleIngrSearch from "./components/SingleIngrSearch";
import PersonalRecipeSearch from "./components/PersonalRecipeSearch";
import Landing from "./components/Landing";

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
      </Routes>
    </>
  );
}

export default App;
