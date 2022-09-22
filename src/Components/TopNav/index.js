import "./TopNav.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

function TopNav(onAddToCart) {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <>
      <div className="top-nav">
        <NavLink className="logo" to="/">
          &#128366; EDUHUT
        </NavLink>
        <div className="nav-content">
          <NavLink className="about" to="/about">
            About
          </NavLink>
          <NavLink className="contact" to="/contact">
            Contact Us
          </NavLink>
          {!user ? (
            <>
              <NavLink className="signup" to="/signup">
                SignUp
              </NavLink>
              <NavLink className="login" to="/login">
                Login
              </NavLink>
              <NavLink className="cart" to="/cart">
                &#128722;
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="welcome" to="/profile">
                Welcome 👤
              </NavLink>
              <NavLink className="logout" onClick={handleLogout} to="/">
                Logout
              </NavLink>
              <NavLink className="cart" to="/cart">
                &#128722;
              </NavLink>
            </>
          )}

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default TopNav;
