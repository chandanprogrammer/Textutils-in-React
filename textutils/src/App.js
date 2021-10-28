// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [modeText, setModeText] = useState("Enable Light Mode");
  const toggleMode = () => {
    if (mode === "light" || modeText === "Enable Light Mode") {
      setMode("dark");
      document.body.style.backgroundColor = "#042745"; //#292929
      setModeText("Enable Dark Mode");
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeText("Enable Light Mode");
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        homeText="Home"
        aboutText="About Us"
        contactText="Contact Us"
        blogText="Blog"
        mode={mode}
        modeText={modeText}
        toggleMode={toggleMode}
      />
      <Alert alert="This is Alert"/>
      <TextForm heading="Enter the Text to Analyze" mode={mode} />
      {/* <About/> */}
    </>
  );
}
export default App;
