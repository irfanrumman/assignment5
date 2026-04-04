import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const AddNewBtn = () => {
  return (
    <>
      <div>
        <a href="form.html" className="btn btn-success">
          <FontAwesomeIcon icon={faPlusCircle} /> Add New
        </a>
      </div>
    </>
  );
};

export default AddNewBtn;
