import React from 'react'
import './RepoList.css'

const RepoList = ({data,setUserInfo}) => {
    const clickHandler = () => {
        const fullName = data.full_name;
        setUserInfo(fullName);
    }
    return (
        <div className="repoList" onClick={clickHandler}>
            <div className="repoHeading">{data.name}</div>
            <div className="repoDesc">{data.description}</div>
        </div>
    )
}

export default RepoList
