import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleEqualClick = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("ERROR");
    }
  };

  const handleClick = (e) => {
    if (result === "ERROR") {
      setResult(e.target.name);
    } else setResult(result + e.target.name);
  };

  const handleBackSpaceClick = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleClearClick = () => {
    setResult("");
  };

  return (
    <>
    <h1>React calculator</h1>
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <div className="item1">
          <button name="clear" onClick={handleClearClick}>
            clear
          </button>
          <button name="backspace" onClick={handleBackSpaceClick}>
            C
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
        </div>
        <div className="item2">
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
        </div>
        <div className="item3">
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="item4">
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="item5">
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="=" onClick={handleEqualClick}>
            =
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
