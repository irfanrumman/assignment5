import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/CardBody.css";
import { useContext, useState } from "react";
import { Contactctx } from "../../contexts/ContactPagectx";
import UpdateModal from "../modals/UpdateModal.jsx";
import ConfirmBtn from "../modals/ConfirmBtn.jsx";

const CardBody = () => {
  const {
    contactPosts,
    contactShowHandler,
    confirmModalHandler,
    contactUpdateHandler,
    deleteHandelr,
    contactRemoveHandler,
  } = useContext(Contactctx);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const deleteBtnHandler = (postId) => {
    confirmModalHandler(postId);
    contactPosts.confirmModal.showModal == true;
  };
  const dataPosts =
    contactPosts.filteredPosts?.length > 0
      ? contactPosts.filteredPosts
      : contactPosts.posts;

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
              dataPosts?.map((post, ind) => (
                <tr key={post.id}>
                  <td>{ind + 1}</td>
                  <td>{post.fname}</td>
                  <td>{post.lname}</td>
                  <td>{post.email}</td>
                  <td>{post.phone}</td>
                  <td width="150">
                    <button
                      // href="show.html"
                      onClick={() => contactShowHandler(post.id)}
                      className="btn btn-sm btn-circle btn-outline-info"
                      title="Show"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>

                    <button
                      onClick={() => contactShowHandler(post.id)}
                      className="btn btn-sm btn-circle btn-outline-secondary"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => deleteBtnHandler(post.id)}
                      className="btn btn-sm btn-circle btn-outline-danger"
                      title="Delete"
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
        {contactPosts.confirmModal.showModal && <ConfirmBtn />}
      </div>
    </>
  );
};

export default CardBody;
