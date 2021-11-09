import axios from "axios";
import React, { useEffect, useState } from "react";
import IssuesList from "./IssuesList";
import './Issues.css'

const Issues = ({ userInfo }) => {
  const [issues, setIssues] = useState([]);
  const [issuesValid, setIssuesValid] = useState(false);
  const loadedIssues = [];
  useEffect(() => {
    const fetchIssuesDetail = async () => {
      const { data } = await axios.get(
        `https://api.github.com/repos/${userInfo}/issues`
      );
      if (data.length > 0) {
        data.map((e) => loadedIssues.push({title: e.title,
        id: e.id}));
        setIssues(loadedIssues);
        setIssuesValid(true);
      }
    };
    fetchIssuesDetail();
  }, []);

  return (
    <div className="issues">
      {!issuesValid && <div className="invalidIssue">No Issues Found.</div>}
      {issuesValid && issues.map((issue) => <IssuesList key={issue.id} issueName={issue.title} />)}
    </div>
  );
};

export default Issues;
