import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Allcomponents.css";
import NutritionFact from "./NutritionFact";

const SingleIngrSearch = () => {
  const [singleIngr, setSingleIngr] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("gm");
  const [image, setImage] = useState();
  const [showModal, setShowModal] = useState(false);

  //function to get data
  const getData = async () => {
    console.log(process.env.VITE_NUTRITION)

    const res = await fetch(
      process.env.VITE_NUTRITION +
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

  //fucntion to get image data
  const getImage = async () => {
    const res = await fetch(
      import.meta.env.VITE_IMAGE + ingredient + "&nutrition-type=logging"
    );
    const data = await res.json();
    setImage(data);
  };

  //function to get user ingredient
  const handleIngredientChange = (e) => {
    const data = e.target.value;
    setIngredient(data);

    const letters = /^[A-Za-z\s\n\b\']+$/;
    if (data.length === 0) {
      return;
    } else if (!data.match(letters)) {
      return alert("ERROR! No number is allow");
    }
  };

  //function to get user key in weight
  const handleWeightChange = (e) => {
    const data = e.target.value;
    setWeight(data);

    if (isNaN(data)) {
      return alert("ERROR! Please keyin number between 1-10");
    }
  };

  //function handle button click
  const handleClick = (e) => {
    const data = e.target.value;
    setUnit(data);
  };

  return (
    <div className="single">
      <div className="container md">
        <div>
          <h2 className="h2title md">
            Searching Nutrition for Individual Ingredient
          </h2>
          <div className="box">
            <p>
              Hello everyone, from here you can search out all the individual
              ingredient
            </p>
          </div>
          <div>
            <div className="row2 md">
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
          <input
            type="text"
            id="space"
            className="col-md-3"
            placeholder="Key in ingredient weight"
            onChange={handleWeightChange}
          ></input>
          <select id="space" className="col-sm-1" onClick={handleClick}>
            <option>gm</option>
            <option>kg</option>
          </select>
        </div>
        <br />
        <div className="row justify-content-md-center">
          <input
            type="text"
            id="space"
            className="col-md-4"
            placeholder="Key in ingredient Name"
            onChange={handleIngredientChange}
          ></input>
        </div>
        <div>
          <button
            type="button"
            id="btn"
            // className="col-md-1 btn btn-outline-info"
            disabled={!(weight && ingredient)}
            onClick={getData}
          >
            Search
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
            <Link to="/">
              <img
                src="../public/return.256x233.png"
                id="home"
              ></img>
            </Link>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>

      {showModal && singleIngr && image && (
        <NutritionFact
          nutrition={singleIngr}
          weight={weight}
          unit={unit}
          title={ingredient}
          image={image}
          setShowModal={setShowModal}
        ></NutritionFact>
      )}
      <script
        type="text/javascript"
        async
        id="bmr-calculator"
        data-type="verywell-tool"
        data-vertical="verywellfit"
        src="https://www.verywellfit.com/static/5.41.0/components/tools/calculators/iframe-embed/embed.min.js?id=bmr-calculator"
      ></script>
    </div>
  );
};

export default SingleIngrSearch;
