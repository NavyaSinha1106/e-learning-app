import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import TopNav from "../TopNav";
import "./ProfilePage.css";

function ProfilePage() {
  const [error, setError] = useState("");

  const [users, setUser] = useState({});

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const profile = decoded._id;

  const UserData = async () => {
    try {
      const url = `http://localhost:8080/api/users/${profile}`;
      const res = await axios.get(url);
      const data = res.data;
      setUser(data.data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    UserData();
  }, []);

  return (
    <>
      <TopNav />
      <div className="UserCard">
        <div className="User">
          <div className="UserImage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAdyiPYpjwlxEP5peE87DlotUGOsfyJzYSw&usqp=CAU"></img>
          </div>
          <div className="UserInformation">
            <div className="UserTitle">
              <h1>Username: {users.fullName}</h1>
              <h3>E-mail: {users.email}</h3>
              <h3>Phone Number: {users.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
