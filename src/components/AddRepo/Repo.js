import axios from "axios";
import React, { useEffect, useState } from "react";
import RepoList from "./RepoList";
import { useSelector } from "react-redux";


const Repo = ({setUserInfo}) => {
  const loadedRepo = [];
  const [repositories, setRepositories] = useState([])
  
  const repository = useSelector(state => state.repository)
  useEffect(() => {
    const fetchRepoList = async () => {
      for (const URL of repository) {
        const { data } = await axios.get(`https://api.github.com/repos/${URL}`);
        loadedRepo.push(data);
      }
      setRepositories(loadedRepo)
    };
    fetchRepoList();
  }, []);
  const finalRepoList = repositories.map((repo) => (
    <RepoList key={repo.id} data={repo} setUserInfo={setUserInfo}/>
  ))
  return (
    <div>
      {finalRepoList}
    </div>
  );
};

export default Repo;
