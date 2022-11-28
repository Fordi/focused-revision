/*
  When button#userInputSubmit button is clicked,
  print the current value of input#userInput 
  inside of p#userOutput.
 */
const Part1 = () => {
  return (
    <section>
      <h2>Part One</h2>
      <p id="userOutput">{/* Print output here */}</p>
      <fieldset>
        <label htmlFor="userInput">Input:</label>
        <input id="userInput"></input>
        <button id="userInputSubmit">Submit</button>
      </fieldset>
    </section>
  );
};

export default Part1;
