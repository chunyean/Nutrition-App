import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Calculator = () => {
  const [calories, setCalories] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(30);
  const [exercise, setExercise] = useState();
  const [bmi, setBmi] = useState();

  const maleCaloriesCals = () => {
    const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    const amr = bmr * exercise;
    const bodyMass = (weight / height / height) * 10000;
    setBmi(bodyMass.toFixed());
    setCalories(amr.toFixed(1));
  };

  const femaleCaloriesCals = () => {
    const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
    const amr = bmr * exercise;
    const bodyMass = (weight / height / height) * 10000;
    setBmi(bodyMass.toFixed());
    setCalories(amr.toFixed(1));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }

  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const handleExerciseChange = (e) => {
    setExercise(e.target.value)
  }

  if( weight && height && age && exercise && gender === male){
    return maleCaloriesCals()
  } else if ( weight && height && age && exercise && gender === female){
    return femaleCaloriesCals()
  }



  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleGenderChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};

export default Calculator;
