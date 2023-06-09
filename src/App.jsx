import { useState } from "react";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

import "./App.css";

import data from "./assets/emojiList.json";

function App() {
  const [searchPattern, setSearchPattern] = useState("");

  const filteredData = data.filter((element) =>
    element.keywords.includes(searchPattern)
  );
  //.slice(0, 20);

  return (
    <div className="app">
      <Search
        searchPattern={searchPattern}
        setSearchPattern={setSearchPattern}
      ></Search>

      <ul className="results">
        {filteredData.map((element) => {
          return (
            <li
              key={element.title}
              onClick={() => {
                navigator.clipboard.writeText(element.symbol).then(() => {
                  return alert("Copied the text: " + element.symbol);
                });
              }}
            >
              <Line data={element} />
            </li>
          );
        })}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
