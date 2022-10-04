import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { deleteArgonaute } from "../feature/argonaute.slice";
const Delete = ({ argonauteId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteDoc(doc(db, "argonautes", argonauteId)).then(() =>
      dispatch(deleteArgonaute(argonauteId))
    );
  };
  return (
    <div>
      <span className="delete" onClick={(e) => handleDelete()}>
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </div>
  );
};

export default Delete;
