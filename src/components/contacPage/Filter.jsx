import React from "react";
import "../../assets/css/Filter.css";

const Filter = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-3">
        <div className="fs-2">
          <i className="fa fa-filter text-success"></i> Filter
        </div>
        <select className="form-select" aria-label="Default select example">
          <option selected>Default</option>
          <option value="1">First Name (A → Z)</option>
          <option value="2">Last Name (A → Z)</option>
          <option value="3">Oldest To First</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
