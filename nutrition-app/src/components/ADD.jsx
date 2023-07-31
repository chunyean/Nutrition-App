import React from "react";

const ADD = () => {
  let list = [];

  function enterkey() {
    if (window.event.keyCode == 13) {
      pushingName();
    }
  }

  function pushingName() {
    var elName = document.getElementById("aName");
    var stringName = elName.value.toString();

    // trimming string if you need it
    stringName = stringName.trim();

    if (!stringName.length) {
      return; // check ot mpty string if you need it
    }

    if (list.indexOf(stringName) === -1) {
      // avoid duplications if you need it
      var nameList = list.push(stringName);

      elName.value = ""; // reset value to empty if was added
    }

    console.log(list);
  }

  function removeName() {
    var oneName = document.getElementById("aName").value;
    var stringName = oneName.toString();

    // trimming string if you need it
    stringName = stringName.trim();

    if (!stringName.length) {
      return; // check ot mpty string if you need it
    }

    // filtering our stringName
    list = list.filter((item) => item !== stringName);

    console.log(list);
  }
  return (
    <div>
      <input
        type="text"
        maxlength="8"
        id="aName"
        placeholder="Write a name."
        onKeyDown={enterkey()}
      />
      <button onclick={pushingName()}>ADD</button>
      <button onclick={removeName()}>REMOVE</button>
    </div>
  );
};

export default ADD;
