import React, { useState } from "react";
import Input from "./Input";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const PersonalRecipeSearch = () => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [nutrition, setNutrition] = useState("");

  const getData = async () => {
    const res = await fetch(import.meta.env.VITE_DETAIL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "title": title,
        "ingr": ingredient
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      setNutrition(data);
      console.log(nutrition)
    }else{
      alert("there is an error");
    }
  };

  const handleTitle = (e) => {
    const data = e.target.value;
    setTitle(data);

  };

  const handleIngredient = (e) => {
    const data = [e.target.value];
    setIngredient(data);
  };
  
  console.log(title)
  console.log(ingredient)

  return (
    <>
      <div className="container-lg">
        <div className="row">
          <h2>
            By this page you can check all the nutrition by you own recipe.{" "}
            <br />
            Homecook food or any creative dishes by you
          </h2>
          <h3>Title of Your Own Recipe</h3>
          <Input
            className="col-sm-3"
            type="text"
            placeHolder="Title"
            handleOnChange={handleTitle}
          ></Input>
          <h3>Key in all the weight, unit and ingredient</h3>
          <Input
            className="col-sm-5"
            placeHolder="Weight and Ingredient"
            handleOnChange={handleIngredient}
          ></Input>
          <button className="col-sm-2" type="button" onClick={getData}>
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalRecipeSearch;
