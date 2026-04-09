import React, { useContext, useState } from "react";
import { Contactctx } from "../../contexts/ContactPagectx";

const InputSearch = () => {
  const { setSearchItem } = useContext(Contactctx);
  const [inputData, setInputData] = useState("");

  const changeHandler = (e) => {
    setInputData(e.target.value);
  };

  return (
    <>
      <form
        className="input-group w-50"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchItem(inputData.trim());
          setInputData("");
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="search contact"
          value={inputData}
          onChange={changeHandler}
        />
        <button className="btn btn-success" type="submit" id="button-addon2">
          Search
        </button>
      </form>
    </>
  );
};

export default InputSearch;
