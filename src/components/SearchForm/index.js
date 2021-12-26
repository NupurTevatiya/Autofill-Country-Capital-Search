import React from "react";
import "./style.css";

function SearchForm({search, handleInputChange, data}) {
  return (
    <form className="search search-form">
      <div className="form-group">
        <label htmlFor="country">Country and Capital:</label>
        <input
          value={search}
          onChange={handleInputChange}
          name="countries"
          list="countries"
          type="text"
          className="form-control"
          placeholder="Type in a country"
          id="country"
        />
        <datalist id="countries">
          {data.map(obj => (
            <option value={obj.name} key={obj.alpha2Code} />
          ))}
          {data.map(obj => (
            <option value={obj.capital} key={obj.alpha2Code} />
          ))}
        </datalist>
      </div>
    </form>
  );
}

export default SearchForm;
