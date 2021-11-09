import React,{useRef} from "react";
import Modal from "../UI/Modal";
import "./AddRepo.css";
import { useDispatch } from "react-redux";


const AddRepo = ({ onClose, onAdd }) => {
    const dispatch = useDispatch();
    const ownerRef = useRef();
    const repoRef = useRef();
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userData = ownerRef.current.value + '/' + repoRef.current.value;
        dispatch({type: 'ADD' , info: userData})
        onClose();
    }
  return (
    <Modal onClose={onClose}>
      <form className="addRepo" onSubmit={formSubmitHandler}>
        <p className="addRepo-Heading">ADD NEW REPOSITORY</p>
        <div className="formgroup">
          <label className="addRepo-label" htmlFor="owner">Owner / Organisation </label>
          <input ref={ownerRef} type="text" className="addRepo-input" id="owner" />
        </div>
        <div className= "formgroup">
          <label className="addRepo-label" htmlFor="repo">Repository Name</label>
          <input ref={repoRef} type="text" className="addRepo-input" id="repo" />
        </div>
        <button className="addRepo-btn" type="submit">ADD</button>
      </form>
    </Modal>
  );
};

export default AddRepo;
