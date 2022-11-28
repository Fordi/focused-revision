/*
When button#showCountrInfo is clicked,
query the Rest Countries API,
and update p#countryInfo with the "Capital, Country" values,
of Peru. 

Discussion: How would you update this to allow a user to select their favorite country?

Discussion: How would you detect and handle API request failures?
*/

import { useState } from "react";

// Replace (nameParamHere) with your country of choice.
const restCountriesAPI = (q) => `https://restcountries.com/v2/name/${encodeURIComponent(q)}`;
import useFetch from '../useFetch';

const Part2 = () => {
  const [clicked, setClicked] = useState(false);
  const {data, loading, error} = useFetch(restCountriesAPI("Peru"), { enabled: clicked });
  const onClick = () => {
    setClicked(true);
  }
  return (
    <section>
      <h2>Part Two</h2>
      {loading && "..."}
      <p id="countryInfo">{data?.[0]?.capital}</p>
      <button id="showCountryInfo" onClick={onClick}>
        Show country info
      </button>
    </section>
  );
};

export default Part2;
