import { useContext } from "react";
import { Contactctx } from "../../contexts/ContactPagectx";

const ConfirmBtn = () => {
  const { contactPosts, deleteHandelr, closeConfirmModal } =
    useContext(Contactctx);

  const deleteConfirm = () => {
    deleteHandelr(contactPosts.confirmModal.id);
  };
  return (
    <>
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Action</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeConfirmModal}
              ></button>
            </div>

            <div className="modal-body">
              <p>Are you sure?</p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeConfirmModal}>
                Cancel
              </button>

              <button className="btn btn-danger" onClick={deleteConfirm}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* backdrop */}
      <div className="modal-backdrop show"></div>
    </>
  );
};

export default ConfirmBtn;
