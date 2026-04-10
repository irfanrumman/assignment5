import { NavLink } from "react-router";
import "../../assets/css/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="index.html">
            <strong>Contact</strong> App
          </a>
          <div className="d-flex gap-3 ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-success" : ""
              }
            >
              Contact List
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
