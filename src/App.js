import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";

function App() {
  const [countries, setCountries] = useState([]);
  const [CountryMatch, setCountryMatch] = useState([]);
  const [search, setSearch] = useState();
  const loadName = async () => {
    const response = await axios.get(
      "http://api.countrylayer.com/v2/all?access_key=925af8fd7c1e07ffaeb5f6b4834fd3f0"
    );
    setCountries(response.data);
  };
  useEffect(() => {
    loadName();
  }, []);

  const searchName = (e) => {
    let text = e.target.value;

    if (!text.length) {
      setCountryMatch();
      setSearch();
      return;
    }
    setSearch(text);
    let matches = countries.filter((obj) => {
      const regex = new RegExp(`${text}`, "gi");
      return obj.name.match(regex) || obj.capital.match(regex);
    });

    setCountryMatch(matches);
  };
  return (
    <div className="App">
      <h1> Search Country and its Capital</h1>

      <SearchForm
        handleInputChange={searchName}
        data={countries}
        search={search}
      ></SearchForm>
      {CountryMatch &&
        CountryMatch.map((item, index) => (
          <div key={index} style={{ marginLeft: "5px" }}>
            <p style={{ width: "50%" }}>
              {`Name: ${item.name},capital: ${item.capital}`}
            </p>
          </div>
        ))}
    </div>
  );
}
export default App;
