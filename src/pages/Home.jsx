import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
const UserCard = (props) => {

  return (
    <div className="col">
      <Link
      to={{
        pathname: `/${"user"}`,
        state: props,
      }}> 
            <h1>Click Here</h1>
      </Link>
    </div>
  );
};

export default UserCard;
