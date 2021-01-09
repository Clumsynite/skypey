import React from "react";
import Avatar from "react-avatar";

import "./styles/User.css";

const User = ({ user }) => {
  const { name, status } = user;
  return (
    <div className="User">
      <Avatar name={name} className="User__pic" size={50} />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
