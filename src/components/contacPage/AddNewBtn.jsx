import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";

const AddNewBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => navigate("/add-new")}
          className="btn btn-success"
        >
          <FontAwesomeIcon icon={faPlusCircle} /> Add New
        </button>
      </div>
    </>
  );
};

export default AddNewBtn;
