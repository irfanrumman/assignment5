import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/CardBody.css";
import { useContext } from "react";
import { Contactctx } from "../../contexts/ContactPagectx";
import UpdateModal from "../modals/UpdateModal.jsx";

const CardBody = () => {
  const {
    contactPosts,
    contactEditHandler,
    contactUpdateHandler,
    contactRemoveHandler,
  } = useContext(Contactctx);
  return (
    <>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactPosts.errors.fetchErr && (
              <tr>
                <td>{contactPosts.errors.fetchErr}</td>
              </tr>
            )}
            {contactPosts.isLoading == true ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              contactPosts?.posts?.map((post, ind) => (
                <tr key={post.id}>
                  <td>{ind + 1}</td>
                  <td>{post.fname}</td>
                  <td>{post.lname}</td>
                  <td>{post.email}</td>
                  <td>{post.phone}</td>
                  <td width="150">
                    <button
                      // href="show.html"
                      onClick={() => contactEditHandler(post.id)}
                      className="btn btn-sm btn-circle btn-outline-info"
                      title="Show"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>

                    <button
                      // href="form.html"
                      onClick={() => contactUpdateHandler(post)}
                      className="btn btn-sm btn-circle btn-outline-secondary"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      // href="#"
                      onClick={() => contactRemoveHandler(post)}
                      className="btn btn-sm btn-circle btn-outline-danger"
                      title="Delete"
                      // onClick={() => "confirm('Are you sure?')"}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {contactPosts.editMode && contactPosts.editAbleMode && <UpdateModal />}
      </div>
    </>
  );
};

export default CardBody;
