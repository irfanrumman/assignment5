import React, { useContext } from "react";
import "../../assets/css/Filter.css";
import { Contactctx } from "../../contexts/ContactPagectx";

const Filter = () => {
  const { contactPosts, filteringHandel } = useContext(Contactctx);
  const filterType = contactPosts.filterType;
  const changeHandler = (e) => {
    filteringHandel(e.target.value);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-3">
        <div className="fs-2">
          <i className="fa fa-filter text-success"></i> Filter
        </div>
        <select
          className="form-select"
          value={filterType}
          onChange={changeHandler}
        >
          <option defaultValue="latest">Default</option>
          <option value="fname">First Name (A → Z)</option>
          <option value="lname">Last Name (A → Z)</option>
          <option value="oldest">Oldest To First</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
