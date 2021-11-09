import React from "react";
import "./IssuesList.css";

const BranchList = ({ issueName }) => {
  return (
    <div className="issueBox">
      <div className="issueName">{issueName}</div>
    </div>
  );
};

export default BranchList;
