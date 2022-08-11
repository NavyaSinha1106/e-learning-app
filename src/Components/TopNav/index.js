import "./TopNav.css";
import { Outlet, NavLink } from "react-router-dom";

function TopNav(props) {
  return (
    <>
      <div className="top-nav">
        <NavLink className="logo" to="/homepage">&#128366; EDUHUT</NavLink>
        <div className="nav-content">
          <NavLink className="about" to="/about">About</NavLink>
          <NavLink className="contact" to="/contact">Contact Us</NavLink>
          <NavLink className="signup" to="/signup">SignUp</NavLink>
          <NavLink className="login" to="/login">Login</NavLink>
        <Outlet />
        </div>
      </div>
    </>
  );
}

export default TopNav;
