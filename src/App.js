// Each part of the test is contained
// within its own component as follows...
import Part1 from "./Questions/Part1";
import Part2 from "./Questions/Part2";
import Part3 from "./Questions/Part3";

import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <h1>React Test</h1>
      <Part1 />
      <Part2 />
      <Part3 />
    </main>
  );
}
