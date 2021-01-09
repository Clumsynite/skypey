import React from "react";
import Avatar from "react-avatar";

import store from "../store";
import { setActiveUserId } from "../actions";

import "./User.css";

const User = ({ user }) => {
  const { name, status } = user;

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <Avatar name={name} className="User__pic" size={50} />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );

  function handleUserClick({ user_id }) {
    store.dispatch(setActiveUserId(user_id));
  }
};

export default User;
