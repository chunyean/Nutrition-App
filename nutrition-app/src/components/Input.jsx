import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        onChange={props.handleOnChange}
        placeholder={props.placeholder}
      ></input>
    </>
  );
};

export default Input;
