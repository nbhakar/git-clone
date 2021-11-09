import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BranchList from './BranchList';
import './BranchDetail.css'

const BranchDetail = ({userInfo}) => {
const [branches, setBranches] = useState([]);
const loadedBranch = [];
    useEffect(() => {
        const fetchBranchDetail = async () => {
            const response = await fetch(`https://api.github.com/repos/${userInfo}/branches`);
            const data = await response.json();
            data.map((e) => (loadedBranch.push({name: e.name,
            id: e.commit.sha})))
            setBranches(loadedBranch)
        };
        fetchBranchDetail();
      }, [userInfo]);

    return (
        <div>
            {branches && branches.map((branch) => <BranchList key={branch.id}  branchName={branch.name} />)}
        </div>
    )
}

export default BranchDetail
