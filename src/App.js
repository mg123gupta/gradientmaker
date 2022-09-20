import { useState, useEffect, useRef } from "react";

import {
  BsArrowUp,
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowDownRight,
  BsArrowDownLeft,
  BsArrowUpRight,
  BsArrowUpLeft,
} from "react-icons/bs";
import "./App.css";

function App() {
  const [colour1, setColour1] = useState("#1488cc");
  const [colour2, setColour2] = useState("#2b32b2");
  const [currentDirection, setCurrentDirection] = useState("to top");
  const outputCode = useRef();

  function generateCode() {
    outputCode.current.value = `background-image:linear-gradient(${currentDirection},${colour1}, ${colour2});`;
    console.log(
      "value",
      `linear-gradient(${currentDirection},${colour1}, ${colour2})`
    );

    document.body.style.backgroundImage = `linear-gradient(${currentDirection},${colour1}, ${colour2})`;
  }

  useEffect(() => {
    generateCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setDirection(value, _this) {
    setCurrentDirection(value);
  }

  return (
    <div className="wrapper">
      <p className="wrapper_heading">GRADIENT GENERATOR TOOL</p>

      <div className="wrapper_container">
        <div className="container_innerdiv">
          <label>
            Color 1 :
            <input
              type="color"
              style={{ border: "none" }}
              value={colour1}
              id="color-a"
              onChange={(e) => setColour1(e.currentTarget.value)}
            />
          </label>
          <label>
            Color 2 :
            <input
              type="color"
              style={{ border: "none" }}
              value={colour2}
              id="color-b"
              onChange={(e) => setColour2(e.currentTarget.value)}
            />
          </label>
        </div>
        <div className="buttons">
          <button
            style={{
              backgroundColor:
                currentDirection === "to top" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to top")}
          >
            <BsArrowUp className="arrow" />
          </button>
          <button
            style={{
              backgroundColor:
                currentDirection === "to bottom" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to bottom")}
          >
            <BsArrowDown className="arrow" />
          </button>
          <button
            style={{
              backgroundColor:
                currentDirection === "to left" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to left")}
          >
            <BsArrowLeft className="arrow" />
          </button>
          <button
            style={{
              backgroundColor:
                currentDirection === "to right" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to right")}
          >
            <BsArrowRight className="arrow" />
          </button>

          <button
            style={{
              backgroundColor:
                currentDirection === "to bottom right" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to bottom right")}
          >
            <BsArrowDownRight className="arrow" />
          </button>
          <button
            style={{
              backgroundColor:
                currentDirection === "to bottom left" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to bottom left")}
          >
            <BsArrowDownLeft className="arrow" />
          </button>

          <button
            style={{
              backgroundColor:
                currentDirection === "to top right" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to top right")}
          >
            <BsArrowUpRight className="arrow" />
          </button>
          <button
            style={{
              backgroundColor:
                currentDirection === "to top left" ? "#1488cc" : "white",
            }}
            onClick={() => setDirection("to top left")}
          >
            <BsArrowUpLeft className="arrow" />
          </button>
        </div>
        <button id="submit" onClick={() => generateCode()}>
          generate
        </button>
        <div>
          <textarea ref={outputCode} rows="4" value=""></textarea>
        </div>
      </div>
    </div>
  );
}
export default App;
