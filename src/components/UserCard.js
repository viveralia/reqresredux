import React from "react";
import CardLayout from "./CardLayout";

const UserCard = ({ user: { first_name, last_name, avatar, email } }) => {
  return (
    <CardLayout>
      <article className="card">
        <img
          src={avatar}
          alt={`${first_name} ${last_name}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-truncate mb-0 h6">{`${first_name} ${last_name}`}</h5>
        </div>
        <div className="card-footer text-muted text-truncate">{email}</div>
      </article>
    </CardLayout>
  );
};

export default UserCard;
