import React from "react";
import moment from "moment";

const DirectoryRow = ({ profile }) => {
  return (
    <div className="row my-2">
      <div className="col">
        <img src={profile.thumbnail} alt={profile.lastName + "-thumbnail"} />
      </div>
      <div className="col">{profile.firstName + " " + profile.lastName}</div>
      <div className="col">{profile.email}</div>
      <div className="col">{profile.phone}</div>
      <div className="col">{moment(profile.dob).format("M/D/YYYY")}</div>
    </div>
  );
};

export default DirectoryRow;
