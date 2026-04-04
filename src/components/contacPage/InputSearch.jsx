import React from "react";

const InputSearch = () => {
  return (
    <>
      <div className="input-group w-50">
        <input
          type="text"
          className="form-control"
          placeholder="search contact"
        />
        <button className="btn btn-success" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </>
  );
};

export default InputSearch;
