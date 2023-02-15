import React from "react"
import { users as storedUsers } from "../../state/models/users";

function UserProfile() {
  return (
    <div className="UserProfile">
      <div className="UserProfile__item">{storedUsers[0].name}</div>
      <div className="UserProfile__item">{storedUsers[0].profilePic}</div>
      <div className="UserProfile__item">{storedUsers[0].shortBio}</div>
    </div>
  )
};

export default UserProfile;
