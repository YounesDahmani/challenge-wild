import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase.config";
const Delete = ({ argonauteId }) => {
  const handleDelete = () => {
    deleteDoc(doc(db, "argonautes", argonauteId));
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
