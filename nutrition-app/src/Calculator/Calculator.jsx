import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../SingleIngredient/Landing.css";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [calories, setCalories] = useState();
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState("");
  const [exercise, setExercise] = useState(1.2);
  const [bmi, setBmi] = useState();

  const femaleCaloriesCals = () => {
    const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    const amr = bmr * exercise;
    const bodyMass = (weight / height / height) * 10000;
    setBmi(bodyMass.toFixed(1));
    setCalories(amr.toFixed());
  };

  const maleCaloriesCals = () => {
    const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
    const amr = bmr * exercise;
    const bodyMass = (weight / height / height) * 10000;
    setBmi(bodyMass.toFixed(1));
    setCalories(amr.toFixed());
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleClicked = (e) => {
    if (weight && height && age && exercise && gender === "male") {
      return maleCaloriesCals();
    } else {
      return femaleCaloriesCals();
    }
  };

  return (
    <div className="container4 md">
      <div className="boxx md">
        <div className="col-md-12">
          <h2>Calories Calculator</h2>
          <h4>
            Use this calorie calculator to find out how many calories you really
            need per day!
          </h4>
          <select className="gender col-md-2" onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: 350,
                maxWidth: "md",
                left: 10,
              },
            }}
            noValidate
            autoComplete="off"
            className="boxfield"
          >
            <div className="input">
              <TextField
                id="outlined-search"
                label="Age"
                type="text"
                onChange={handleAgeChange}
              />
              <br />
              <TextField
                id="outlined-search"
                label="Height in cm"
                type="text"
                onChange={handleHeightChange}
              />
              <br />
              <TextField
                id="outlined-search"
                label="Weight in kg"
                type="text"
                onChange={handleWeightChange}
              />
            </div>
          </Box>
          <select className="col-md-3" onChange={handleExerciseChange}>
            <option value={1.2}>Sedentary (little or no exercise)</option>
            <option value={1.375}>
              Lightly active (exercise 1–3 days/week)
            </option>
            <option value={1.55}>
              Moderately active (exercise 3–5 days/week)
            </option>
            <option value={1.725}>Active (exercise 6–7 days/week)</option>
            <option value={1.9}>
              Very active (hard exercise 6–7 days/week)
            </option>
          </select>
        </div>
        <button className="button3 md btn btn-success" onClick={handleClicked}>
          Submit
        </button>
        <div className="result">
          <h4>Calories per day: {calories}</h4>
          <h4>BMI: {bmi}</h4>
        </div>
      </div>
      <Link to="/">
        <img
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png"
          id="home4"
        ></img>
      </Link>
    </div>
  );
};

export default Calculator;
