import React from "react";
import Delete from "./Delete";

const Argonaute = ({ argonaute }) => {
  return (
    <div className="argonaute">
      <div className="infos">
        <span className="name">{argonaute.name}</span>
        <span className="adjective">{argonaute.adjective}</span>
      </div>
      <span className="delete">
        <Delete argonauteId={argonaute.id} />
      </span>
    </div>
  );
};

export default Argonaute;
