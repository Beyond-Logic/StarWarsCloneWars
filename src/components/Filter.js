import React from "react";

function Filter() {
  return (
    <>
      <div class="btn-group filter">
        <button
          class="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Current Year
        </button>
        {/* <ul class="dropdown-menu"></ul> */}
      </div>
      <div class="btn-group filter">
        <button
          class="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Current Week
        </button>
        {/* <ul class="dropdown-menu"></ul> */}
      </div>
    </>
  );
}

export default Filter;
