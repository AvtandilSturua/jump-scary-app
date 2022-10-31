import "./App.css";
import SpookyPic from "./Components/spooky.jpg";
import Horror from "./JumpScary.js";
import Voice from "./Components/Scream.mp3";
import { useState, useEffect, useRef } from "react";
import Voice2 from "./Components/AnotherScream.mp3";

function App() {
  const [isActive, setIsActive] = useState(false);
  const changeBackground = () => {
    setIsActive(true);
    new Audio(Voice2).play();
  };
  const screamAgain = () => {
    new Audio(Voice).play();
  };
  return (
    <>
      <div className="main-info">
        <button className="haha" onClick={changeBackground}>
          Welcome to my portfolio.
        </button>
        <p>
          DISCLAIMER! <br />
          Content is not intended for the faint of heart or children either It
          is designed as a joke
        </p>
        <div className={`random ${isActive && "main"}`}>
          <div className="pic">
            <img src={SpookyPic} />
            <p>Sorry About that :/</p>
            <button onClick={screamAgain} className="sorry">
              Click for relax
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
