import { useRef } from "react";
import { useState } from "react";

/*
  When button#userInputSubmit button is clicked,
  print the current value of input#userInput 
  inside of p#userOutput.
 */
const Part1 = () => {
  const input = useRef();
  const [outputText, setOutputText] = useState("");
  const handleSubmit = (e) => {
    setOutputText(input.current?.value);
    e.preventDefault();
    return false;
  };
  return (
    <section>
      <h2>Part One</h2>
      <p id="userOutput">{outputText}</p>
      <fieldset>
        <label htmlFor="userInput">Input:</label>
        <input id="userInput" ref={input}></input>
        <button id="userInputSubmit" onClick={handleSubmit}>Submit</button>
      </fieldset>
    </section>
  );
};

export default Part1;
