import React, { useContext, useState } from "react";
import { Contactctx } from "../../contexts/ContactPagectx";
import ConfirmBtn from "./ConfirmBtn";

const UpdateModal = () => {
  const {
    contactPosts,
    editAbleMode,
    contactUpdateHandler,
    deleteHandelr,
    contactRemoveHandler,
    confirmModalHandler,
    dispatch,
  } = useContext(Contactctx);
  const post = contactPosts?.editAbleMode;

  const intialData = {
    id: post.id,
    fname: post.fname,
    lname: post.lname,
    email: post.email,
    phone: post.phone,
  };
  const [formData, setFormData] = useState(intialData);
  const [isEditing, setIsEditing] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const updateHandler = async (e) => {
    const success = await contactUpdateHandler(e, post.id, formData);
    if (success) {
      setIsEditing(false);
    }
  };

  const deleteBtnHandler = (postId) => {
    console.log(postId);
    confirmModalHandler(postId);
    contactPosts.confirmModal.showModal == true;
  };

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div
            className="row justify-content-md-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-md-6">
              <div className="card">
                <div className="card-header card-title">
                  <strong>Contact Details</strong>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          htmlFor="first_name"
                          className="col-md-3 col-form-label"
                        >
                          First Name
                        </label>
                        <div className="col-md-9">
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              name="fname"
                              value={formData.fname}
                              onChange={changeHandler}
                            ></input>
                          ) : (
                            <p className="form-control-plaintext text-muted">
                              {post.fname}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="last_name"
                          className="col-md-3 col-form-label"
                        >
                          Last Name
                        </label>
                        <div className="col-md-9">
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              name="lname"
                              value={formData.lname}
                              onChange={changeHandler}
                            ></input>
                          ) : (
                            <p className="form-control-plaintext text-muted">
                              {post.lname}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="email"
                          className="col-md-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-md-9">
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={changeHandler}
                            ></input>
                          ) : (
                            <p className="form-control-plaintext text-muted">
                              {post.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="phone"
                          className="col-md-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div className="col-md-9">
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              onChange={changeHandler}
                            ></input>
                          ) : (
                            <p className="form-control-plaintext text-muted">
                              {post.phone}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="name"
                          className="col-md-3 col-form-label text-danger"
                        >
                          {contactPosts.errors.patchErr !== null && `Error`}
                        </label>
                        <div className="col-md-9">
                          <p className="form-control-plaintext text-danger">
                            {contactPosts.errors.patchErr}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group row mb-0">
                        <div className="col-md-9 offset-md-3">
                          {isEditing ? (
                            <button
                              onClick={updateHandler}
                              className="btn btn-info"
                            >
                              Update
                            </button>
                          ) : (
                            <button
                              onClick={() => setIsEditing(true)}
                              className="btn btn-info"
                            >
                              Edit
                            </button>
                          )}
                          <button
                            // onClick={() => deleteHandelr(post.id)}
                            onClick={() => deleteBtnHandler(post.id)}
                            className="btn btn-outline-danger"
                          >
                            Delete
                          </button>
                          {contactPosts.confirmModal.showModal && (
                            <ConfirmBtn />
                          )}
                          <a
                            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                            className="btn btn-outline-secondary"
                          >
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
