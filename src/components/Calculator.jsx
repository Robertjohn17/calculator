import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "." && input.includes(".")) return;
    setInput(input + value);
  };

  const handleClear = (type) => {
    if (type === "C") {
      setInput(input.slice(0, -1));
    } else if (type === "AC") {
      setInput("");
      setPrevInput("");
      setOperator("");
      setResult("");
    }
  };

  const handleOperation = (op) => {
    if (input) {
      setPrevInput(input);
      setInput("");
      setOperator(op);
    }
  };

  const handlePercentage = () => {
    setInput((parseFloat(input) / 100).toString());
  };

  const handleEquals = () => {
    let finalResult;
    switch (operator) {
      case "+":
        finalResult = parseFloat(prevInput) + parseFloat(input);
        break;
      case "-":
        finalResult = parseFloat(prevInput) - parseFloat(input);
        break;
      case "*":
        finalResult = parseFloat(prevInput) * parseFloat(input);
        break;
      case "/":
        finalResult = parseFloat(prevInput) / parseFloat(input);
        break;
      default:
        break;
    }
    setResult(finalResult);
    setInput(finalResult.toString());
    setOperator("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{result || input || "0"}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleClear("AC")}>
          AC
        </button>
        <button className={styles.button} onClick={() => handleClear("C")}>
          C
        </button>
        <button className={styles.button} onClick={handlePercentage}>
          %
        </button>
        <button className={styles.button} onClick={() => handleOperation("/")}>
          /
        </button>

        <button className={styles.button} onClick={() => handleClick("7")}>
          7
        </button>
        <button className={styles.button} onClick={() => handleClick("8")}>
          8
        </button>
        <button className={styles.button} onClick={() => handleClick("9 ")}>
          9
        </button>
        <button className={styles.button} onClick={() => handleOperation("*")}>
          *
        </button>

        <button className={styles.button} onClick={() => handleClick("4")}>
          4
        </button>
        <button className={styles.button} onClick={() => handleClick("5")}>
          5
        </button>
        <button className={styles.button} onClick={() => handleClick("6")}>
          6
        </button>
        <button className={styles.button} onClick={() => handleOperation("-")}>
          -
        </button>

        <button className={styles.button} onClick={() => handleClick("1")}>
          1
        </button>
        <button className={styles.button} onClick={() => handleClick("2")}>
          2
        </button>
        <button className={styles.button} onClick={() => handleClick("3")}>
          3
        </button>
        <button className={styles.button} onClick={() => handleOperation("+")}>
          +
        </button>

        <button className={styles.button} onClick={() => handleClick("0")}>
          0
        </button>
        <button className={styles.button} onClick={() => handleClick(".")}>
          .
        </button>
        <button className={styles.equalButton} onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
