import React from "react";
import Navbar from "./Navbar";
import InputSearch from "./InputSearch";
import AddNewBtn from "./AddNewBtn";
import Filter from "./Filter";
import CardBody from "./CardBody";
import "../../assets/css/ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      {/* <!-- content --> */}
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-title">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2>All Contacts</h2>
                    <InputSearch />
                    <AddNewBtn />
                  </div>
                </div>
                <Filter />
                <CardBody />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
