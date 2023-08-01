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
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState();

  const photo1 =
    "https://i1.wp.com/www.shiveshskitchen.com/wp-content/uploads/2013/05/Cooking-Methods.jpg?w=500&ssl=1";
  const photo2 = "https://static2.bigstockphoto.com/0/1/2/large2/210248167.jpg";
  const photo3 =
    "https://img.freepik.com/free-photo/top-view-cropped-hands-senior-cook-unrecognizable-cutting-carrot-cooking-vegetable-stew_1098-20510.jpg?size=626&ext=jpg&ga=GA1.1.530369616.1688528886&semt=ais";
  const photo4 =
    "https://img.freepik.com/free-photo/young-man-cooking-fresh-food-home-opening-lid-steaming-pot_1220-5383.jpg?w=900&t=st=1690871611~exp=1690872211~hmac=bcf5f21ea9aabe7fd030fb14844d036526800b24c88aa05c3a2487572a41aad8";

  const randomPhoto = [photo1, photo2, photo3, photo3];

  const getPhoto = () => {
    const data = Math.floor(Math.random() * randomPhoto.length);
    setPhoto(randomPhoto[data]);
  };

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
      {showModal && nutrition && (
        <PersonalSearchResult
          nutrition={nutrition}
          title={title}
          setShowModal={setShowModal}
          photo={photo}
        ></PersonalSearchResult>
      )}
    </>
  );
};

export default PersonalRecipeSearch;
