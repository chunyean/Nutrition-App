import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type="text"
        className="col-sm-3"
        onChange={props.handleOnchange}
      ></input>
    </>
  );
};

export default Input;
