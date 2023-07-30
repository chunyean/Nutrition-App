import React, { useState } from "react";

import "./App.css";
import SingleIngrSearch from "./components/SingleIngrSearch";
import PersonalRecipeSearch from "./components/PersonalRecipeSearch";
import SearchIngredient from "./components/SearchIngredient";

function App() {
  return (
    <>
      {/* <SingleIngrSearch></SingleIngrSearch> */}
      <SearchIngredient></SearchIngredient>
    </>
  );
}

export default App;
