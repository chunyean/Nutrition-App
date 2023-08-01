import React, { useState } from "react";
import Input from "./Input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Input.css";
import PersonalSearchResult from "./PersonalSearchResult";

const PersonalRecipeSearch = () => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const getData = async () => {
    const res = await fetch(import.meta.env.VITE_DETAIL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        ingr: dataArray,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      setNutrition(data);
      setShowModal(true)
    } else {
      alert("there is an error");
    }
  };

  const handleTitle = (e) => {
    const data = [e.target.value];
    setTitle(data);
  };

  const handleChange = (event) => {
    setIngredient(event.target.value);
    const newArray = event.target.value.split("\n");
    setDataArray(newArray);
  };

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
            value={ingredient}
            placeHolder="Title"
            handleOnChange={handleTitle}
          ></Input>
          <h3>Key in all the weight, unit and ingredient</h3>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100ch" },
            }}
          >
            <div>
              <TextField
                className=""
                id="outlined-multiline-static"
                multiline
                rows={10}
                placeholder="key in ingredient with weight"
                onChange={handleChange}
              />
            </div>
          </Box>
          <button className="col-sm-2" type="button" onClick={getData}>
            submit
          </button>
        </div>
      </div>
      {showModal && nutrition && <PersonalSearchResult
        nutrition={nutrition}
        title={title}
        setShowModal={setShowModal}
      ></PersonalSearchResult>}
    </>
  );
};

export default PersonalRecipeSearch;
