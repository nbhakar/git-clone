import { useState } from 'react';
import './App.css';
import AddRepo from './components/AddRepo/AddRepo';
import Repo from './components/AddRepo/Repo';
import RepoInfo from './components/RepoDetails/RepoInfo';

function App() {
  const [addRepo, setAddRepo] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const addRepoHandler = () => {
    setAddRepo(true);
  }
  const closeAddRepoHandler = () => {
    setAddRepo(false);
  }

  return (
    <div className="box">
      <div className="header">Github</div>
      <div className="leftPanel">
        <Repo setUserInfo={setUserInfo}  />
      <button className="addBtn" onClick={addRepoHandler}>+</button>
      </div>
      <div className="rightPanel">
        {userInfo && <RepoInfo userInfo={userInfo}/>}
      </div>
      {addRepo && <AddRepo onClose={closeAddRepoHandler} />}
    </div>
  );
}

export default App;
