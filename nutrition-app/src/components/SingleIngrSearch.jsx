import React, { useState } from "react";
import SearchIngredient from "./SearchIngredient";
import Input from "./Input";
import { Link } from "react-router-dom";
import "./Allcomponents.css";

const SingleIngrSearch = () => {
  const [singleIngr, setSingleIngr] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("gm");
  const [image, setImage] = useState();
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
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
    <div className="single">
      <div className="container">
        <div>
          <h2 className="h2title">
            Searching Nutrition for Individual Ingredient
          </h2>
          <div className="box">
            <p>
              Hello everyone, from here you can search out all the individual
              ingredient
            </p>
          </div>
          <div>
            <div className="row2 justify-content-center">
              <p className="p1">Below got two typing box.</p>
              <p>
                First box is key in ingredient weight with unit. Unit must be gm
                or kg. (Example: 100gm, 1kg and etc) <br />
                Second box is key in ingredient.(Example: chicken, apple and
                etc)
              </p>
            </div>
          </div>
          <br />
        </div>
        <div className="row justify-content-md-center">
          <Input
            type="text"
            id="space"
            className="col-sm-3"
            placeholder="Key in ingredient weight"
            handleOnChange={handleWeightChange}
          ></Input>
          <select id="space" className="col-sm-1" onClick={handleClick}>
            <option>gm</option>
            <option>kg</option>
          </select>
        </div>
        <br />
        <div className="row justify-content-md-center">
          <Input
            type="text"
            id="space"
            className="col-md-4"
            placeholder="Key in ingredient Name"
            handleOnChange={handleIngredientChange}
          ></Input>
        </div>
        <div>
          <button type="button" id="btn" className="col-sm-1 btn btn-outline-info" onClick={getData}>
            Search
          </button>
        </div>
        <div className="home">
          <Link to="/">
            <img
              src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png"
              id="home"
            ></img>
          </Link>
        </div>
      </div>

      {showModal && singleIngr && image && (
        <SearchIngredient
          nutrition={singleIngr}
          weight={weight}
          unit={unit}
          ingredient={ingredient}
          image={image}
          setShowModal={setShowModal}
        ></SearchIngredient>
      )}
    </div>
  );
};

export default SingleIngrSearch;
