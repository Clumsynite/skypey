import React from "react";
import Avatar from "react-avatar";

import "./Empty.css";

const Empty = ({ user }) => {
  const { name, status } = user;
  const firstName = name.split(" ")[0];
  return (
    <div className="Empty">
      <h1 className="Empty__name">Welcome, {firstName}</h1>
      <Avatar name={name} className="Empty__img" size={100} />
      <p className="Empty__status">
        <b>Status:</b> {status}
      </p>
      <button className="Empty__btn">Start a Conversation</button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};
export default Empty;
