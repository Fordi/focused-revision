/*
When button#showPartialMatches is clicked,
query the Rest Countries API for all partial matches on "united",
then display the common name for each country 
as an li in ul#showPartialMatches.

Discussion: How might you reuse code from Part2 here, in Part3?
*/
const restCountriesAPI = "https://restcountries.com/v3.1/name/united";

const Part3 = () => {
  return (
    <section>
      <h2>Part 3</h2>
      <ul id="partialMatches">
        {/* List the common names of all matches here */}
      </ul>
      <button id="showPartialMatches">Show partial matches</button>
    </section>
  );
};

export default Part3;
