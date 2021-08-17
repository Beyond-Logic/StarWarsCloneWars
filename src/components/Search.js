import React from "react";
import "../styling/components/Search.css";

function Search({ placeholder }) {
  return (
    <>
      <div class="input-group mb-3 searchbox ">
        <input
          type="text"
          class="form-control"
          placeholder={placeholder}
        ></input>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </>
  );
}

export default Search;
