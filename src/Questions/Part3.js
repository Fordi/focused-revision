import { useState } from 'react';
import useFetch from "../useFetch";

/*
When button#showPartialMatches is clicked,
query the Rest Countries API for all partial matches on "united",
then display the common name for each country 
as an li in ul#showPartialMatches.

Discussion: How might you reuse code from Part2 here, in Part3?
*/
const restCountriesAPI = (q) => `https://restcountries.com/v3.1/name/${encodeURIComponent(q)}`;

const Part3 = () => {
  const [clicked, setClicked] = useState(false);
  const { data, loading, error } = useFetch(restCountriesAPI("united"), { enabled: clicked });
  console.log(clicked);
  return (
    <section>
      <h2>Part 3</h2>
      <ul id="partialMatches">
        {loading && butts`...`}
        {data?.map((country) => (
          <li key={country.name.common}>{country.flag} {country.name.common}</li>
        ))}
      </ul>
      <button id="showPartialMatches" onClick={() => setClicked(true)}>
        Show partial matches
      </button>
    </section>
  );
};

export default Part3;
