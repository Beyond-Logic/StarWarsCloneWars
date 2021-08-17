import React from "react";
import "../styling/components/Pagination.css";

function Pagination() {
  return (
    <div>
      <p className="pagination-nav">
        <i class="fas fa-chevron-left"></i> Back
        <span className="page-count">200 Total</span> Showing 1-20 of 200
        <span className="back">
          <i class="fas fa-chevron-left"></i>
        </span>
        <span className="front">
          <i class="fas fa-chevron-right pl-4"></i>
        </span>
      </p>
    </div>
  );
}

export default Pagination;
