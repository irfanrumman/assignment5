import { useContext, useState } from "react";
import Navbar from "../contacPage/Navbar";
import { Contactctx } from "../../contexts/ContactPagectx";
import generateNextId from "../../utilities/generateNextId";
import { useNavigate } from "react-router";

const AddNewPage = () => {
  const navigate = useNavigate();
  const { contactPosts, contactSubmitHanler, dispatch } =
    useContext(Contactctx);

  const initalPost = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    createdId: "",
  };
  const [post, setPost] = useState(initalPost);

  const changeHandler = (e) => {
    if (e.target.name !== "phone") {
      const valueString = e.target.value.replace(/[0-9]/g, "");
      setPost({ ...post, [e.target.name]: valueString });
    } else if (e.target.name == "phone") {
      const valueNum = e.target.value.replace(/[^0-9]/g, "");
      setPost({ ...post, [e.target.name]: valueNum });
    }
  };

  const submitHandler = async (e, post) => {
    e.preventDefault();
    if (
      !post.fname.trim() ||
      !post.lname.trim() ||
      !post.email.trim() ||
      !post.phone.trim()
    ) {
      return alert(`Please, Write in your input field`);
    }
    const nextPost = { ...post, createdId: Date.now() + "" };
    await contactSubmitHanler(nextPost);
    console.log(nextPost);
    setPost(initalPost);
  };

  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-title">
                  <strong>Add New Contact</strong>
                </div>
                <form onSubmit={(e) => submitHandler(e, post)}>
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
                            <input
                              type="text"
                              name="fname"
                              id="first_name"
                              className="form-control"
                              value={post.fname}
                              onChange={changeHandler}
                            />
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
                            <input
                              type="text"
                              name="lname"
                              id="last_name"
                              className="form-control"
                              value={post.lname}
                              onChange={changeHandler}
                            />
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
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="form-control"
                              value={post.email}
                              onChange={changeHandler}
                            />
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
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="form-control"
                              value={post.phone}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="form-group row mb-0">
                          <div className="col-md-9 offset-md-3">
                            <button type="submit" className="btn btn-primary">
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate("/")}
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddNewPage;
