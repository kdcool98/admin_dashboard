import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mYAtRxmC5eVknkWz5sMlixiZ6wusAbIsGQ&usqp=CAU"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Virat Kohli</span>
              <span className="userShowProfession">Cricketer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowInfoIcon" />
              <span className="userShowInfoTitle">virat19</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowInfoIcon" />
              <span className="userShowInfoTitle">05/11/1988</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowInfoIcon" />
              <span className="userShowInfoTitle">+91-9714173314</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowInfoIcon" />
              <span className="userShowInfoTitle">virat.kohli19@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowInfoIcon" />
              <span className="userShowInfoTitle">Delhi | INDIA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="virat19"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Virat Kohli"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="virat.kohli19@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91-9714173314"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Delhi | INDIA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mYAtRxmC5eVknkWz5sMlixiZ6wusAbIsGQ&usqp=CAU"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
