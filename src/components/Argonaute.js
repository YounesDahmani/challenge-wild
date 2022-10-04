import React from "react";
import Delete from "./Delete";

const Argonaute = ({ argonaute }) => {
  return (
    <div>
      <span>{argonaute.name}</span>
      <span>{argonaute.adjective}</span>
      <span>
        <Delete argonauteId={argonaute.id} />
      </span>
    </div>
  );
};

export default Argonaute;
