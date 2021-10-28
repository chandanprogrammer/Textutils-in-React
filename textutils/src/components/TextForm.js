import React, { useState } from "react";

// Hooks - useState

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const removeTextClick = () => {
    setText("");
  };
  const handleCopy =()=>{
var text = document.getElementById("myTextBox");
text.select();
navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace =()=>{
var newText=text.split(/[ ]+/);
setText(newText.join(" "));
  };
  

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Start Typing your Text here...."
            onChange={handleOnChange}
            id="myTextBox"
            rows="8"
            style={{backgroundColor: props.mode==='light'?'white':'#042745', color: props.mode==='light'?'black':'white'} }
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={removeTextClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>
              {text.split(" ").length} Words, and {text.length} Characters will take about {0.008 * text.split(" ").length} minutes to read for the average reader.
          </p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter Something in the Text Box Above to Preview it here.."}</p>
      </div>
    </>
  );
}
