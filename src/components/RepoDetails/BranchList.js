import React from "react";
import "./BranchList.css";

const BranchList = ({ branchName }) => {
  return (
    <div className="branchBox">
      <div className="branchName">{branchName}</div>
    </div>
  );
};

export default BranchList;
