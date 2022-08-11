import React from "react";
import "./Dashboard.css";
import TopNav from "../TopNav";

function Dashboard() {
    const handleLogout = () =>{
        localStorage.removeItem("token");
        window.location.reload();
    }
  return (
    <>
      <TopNav />
      <button className="logout" onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
