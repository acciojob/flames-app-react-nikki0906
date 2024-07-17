import React, { Component, useState } from "react";
import "../styles/App.css";

const messageArr = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];

const removeMatchedChar = (str1, str2) => {
  let newStr1 = str1;
  let newStr2 = str2;
  for (let i = 0; i < str1.length; i++) {
    const ch1 = str1[i];
    const ch2 = str2[i];
    if (ch1 === undefined || ch2 === undefined) break;
    if (newStr1.includes(ch1) && newStr2.includes(ch1)) {
      newStr1 = newStr1.replace(ch1, "");
      newStr2 = newStr2.replace(ch1, "");
    }
  }
  return [newStr1, newStr2];
};

function App() {
  const input1Ref = React.useRef(null);
  const input2Ref = React.useRef(null);
  const [message, setMessage] = React.useState("");

  const handleCalculate = () => {
    let inputName1 = input1Ref.current.value;
    let inputName2 = input2Ref.current.value;
    if (inputName1 === "" || inputName2 === "")
      return setMessage("Please Enter valid input");
    let [str1, str2] = removeMatchedChar(inputName1, inputName2);
    const msgNumber = (str1.length + str2.length) % 6;
    setMessage(messageArr[msgNumber]); // getting msg based on number
  };

  const handleClear = () => {
    setMessage("");
    input1Ref.current.value = "";
    input2Ref.current.value = "";
  };

  return (
    <div id="main">
      <input name="name1" data-testid="input1" ref={input1Ref} type="text" />
      <input name="name2" data-testid="input2" ref={input2Ref} type="text" />
      <button data-testid="calculate_relationship" onClick={handleCalculate}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{message}</h3>
    </div>
  );
}

export default App;