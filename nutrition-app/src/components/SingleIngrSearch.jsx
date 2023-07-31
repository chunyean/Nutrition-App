import React, { useState } from "react";
import SearchIngredient from "./SearchIngredient";
import Input from "./Input";

const SingleIngrSearch = () => {
  const [singleIngr, setSingleIngr] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("gm");
  const [image, setImage] = useState("");

  const getData = async () => {
    const res = await fetch(
      import.meta.env.VITE_NUTRITION +
        "&nutrition-type=logging&ingr=" +
        weight +
        unit +
        "%20" +
        ingredient
    );
    const data = await res.json();
    setSingleIngr(data);
    getImage();
  };

  const getImage = async () => {
    const res = await fetch(
      import.meta.env.VITE_IMAGE + ingredient + "&nutrition-type=logging"
    );
    const data = await res.json();
    setImage(data);
  };

  const handleIngredientChange = (e) => {
    const data = e.target.value;
    setIngredient(data);
  };

  const handleWeightChange = (e) => {
    const data = e.target.value;
    setWeight(data);
  };

  const handleClick = (e) => {
    const data = e.target.value;
    setUnit(data);
  };


  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <h2 className="h2title">Searching Nutrition for Single Ingredient</h2>
          <p>
            Hello everyone, from here you can search out all the individual
            ingredient
          </p>
          <p>
            Below got two type box.
            <br />
            First box is key in ingredient weight with unit. Unit must be gm or
            kg. (Example: 100gm, 1kg and etc) <br />
            Second box is key in ingredient.(Example: chicken, apple and etc)
          </p>
          <Input
            type="text"
            className="col-sm-2"
            placeholder="Key in ingredient weight"
            handleOnChange={handleWeightChange}
          ></Input>
          <select className="col-sm-1" onClick={handleClick}>
            <option>gm</option>
            <option>kg</option>
          </select>
          <Input
            type="text"
            className="col-sm-3"
            placeholder="Key in ingredient Name"
            handleOnChange={handleIngredientChange}
          ></Input>
          <button type="button" className="col-sm-2" onClick={getData}>
            Search
          </button>
        </div>
      </div>

      {singleIngr && image && (
        <SearchIngredient
          singleIngr={singleIngr}
          weight={weight}
          ingredient={ingredient}
          unit={unit}
          image={image}
        ></SearchIngredient>
      )}
    </>
  );
};

export default SingleIngrSearch;