import React, { useState } from "react";
import BranchDetail from "./BranchDetail";
import Issues from "./Issues";
import "./RepoInfo.css";

const RepoInfo = ({ userInfo }) => {
    const [branch, setBranch] = useState(true);
  return (
    <>
      <div className="delBtnBox">
        <button className="delBtn">DELETE</button>
      </div>
      <div className="repoDetail">
        <button className="detailBtn" onClick={() => setBranch(true)}>BRANCHES</button>
        <button className="detailBtn" onClick={() => setBranch(false)}>ISSUES</button>
        {branch ? <BranchDetail userInfo={userInfo} /> : <Issues userInfo={userInfo} /> }

      </div>
    </>
  );
};

export default RepoInfo;
