import React from "react";

const Input = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2"></div>
        <label className="col-sm-3">Ingredient</label>
        <input
          type="text"
          className="col-sm-3"
          onChange={props.handleOnchange}
        ></input>
        <button type="button" className="col-sm-2" onClick={props.getData}>
          Search
        </button>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default Input;
