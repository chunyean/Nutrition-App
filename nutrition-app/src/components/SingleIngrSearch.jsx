import React, { useState } from "react";
import SearchIngredient from "./SearchIngredient";
import Input from "./Input";

const SingleIngrSearch = () => {
  const [singleIngr, setSingleIngr] = useState("");
  const [ingredient, setIngredient] = useState("");

  const getData = async () => {
    const res = await fetch(import.meta.env.VITE_SINGLEINGRSEARCH + ingredient);
    const data = await res.json();
    setSingleIngr(data);
  };

  const handleOnchange = (e) => {
    const data = e.target.value;
    setIngredient(data);
  };

  return (
    <>
      <Input handleOnchange={handleOnchange} getData={getData}></Input>

      {singleIngr && (
        <SearchIngredient singleIngr={singleIngr}></SearchIngredient>
      )}
    </>
  );
};

export default SingleIngrSearch;
