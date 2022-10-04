import React from "react";

const Argonaute = ({ argonaute }) => {
  return (
    <div>
      <span>{argonaute.name}</span>
      <span>{argonaute.adjective}</span>
    </div>
  );
};

export default Argonaute;
