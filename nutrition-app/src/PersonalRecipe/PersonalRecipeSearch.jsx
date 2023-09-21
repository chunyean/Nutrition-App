import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../SingleIngredient/Allcomponents.css";
import { Link } from "react-router-dom";
import NutritionFact from "../SingleIngredient/NutritionFact";

const PersonalRecipeSearch = () => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState();

  const photo1 =
    "https://i1.wp.com/www.shiveshskitchen.com/wp-content/uploads/2013/05/Cooking-Methods.jpg?w=500&ssl=1";
  const photo2 = "https://static2.bigstockphoto.com/0/1/2/large2/210248167.jpg";
  const photo3 =
    "https://img.freepik.com/free-photo/top-view-cropped-hands-senior-cook-unrecognizable-cutting-carrot-cooking-vegetable-stew_1098-20510.jpg?size=626&ext=jpg&ga=GA1.1.530369616.1688528886&semt=ais";
  const photo4 =
    "https://img.freepik.com/free-photo/young-man-cooking-fresh-food-home-opening-lid-steaming-pot_1220-5383.jpg?w=900&t=st=1690871611~exp=1690872211~hmac=bcf5f21ea9aabe7fd030fb14844d036526800b24c88aa05c3a2487572a41aad8";

  const randomPhoto = [photo1, photo2, photo3, photo4];

  //function to get random photo
  const getPhoto = () => {
    const data = Math.floor(Math.random() * randomPhoto.length);
    setPhoto(randomPhoto[data]);
  };

  //function to get data
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
      setShowModal(true);
      getPhoto();
    } else {
      alert("there is an error");
    }
  };

  //functiont to collect user title
  const handleTitle = (e) => {
    const data = [e.target.value];
    setTitle(data);
  };

  //function to collect user ingredient
  const handleChange = (event) => {
    setIngredient(event.target.value);
    const newArray = event.target.value.split("\n");
    setDataArray(newArray);
  };

  return (
    <div className="personal md">
      <div className="containerper md">
        <div className="row md">
          <h2 className="h2personal md">
            Search all the nutrition by you own recipe.
            <br />
            Homecook food or any creative dishes by you
          </h2>
        </div>
        <div>
          <h4>Title of Your Own Recipe</h4>
          <input
            className="col-md-3"
            type="text"
            id="title"
            placeholder="Title"
            onChange={handleTitle}
          ></input>
          <h4>
            Key in all the weight, unit and ingredient
            <br />
            ex: 100gm chicken breast
            <br />
            100gm white rice
          </h4>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
          >
            <div>
              <TextField
                className="textField"
                id="outlined-multiline-static"
                multiline
                rows={6}
                placeholder="key in ingredient with weight"
                onChange={handleChange}
              />
            </div>
          </Box>
          <button
            className="col-md-2 btn btn-info"
            type="button"
            disabled={!(title && ingredient)}
            onClick={getData}
          >
            submit
          </button>
        </div>
      </div>
      <div className="container md lg">
        <div className="row md lg">
          <div className="col-md-4"></div>
          <div className="col-md-1">
            <Link to="/">
              <img
                src="../public/return.256x233.png"
                id="home2"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      {showModal && nutrition && (
        <NutritionFact
          nutrition={nutrition}
          title={title}
          setShowModal={setShowModal}
          photo={photo}
        ></NutritionFact>
      )}
    </div>
  );
};

export default PersonalRecipeSearch;
