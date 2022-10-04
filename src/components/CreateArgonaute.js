import { addDoc, collection } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../utils/firebase.config";

const CreateArgonaute = () => {
  const name = useRef();
  const adjective = useRef();

  const handleArgonaute = async (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      adjective: adjective.current.value,
    };
    console.log(data);
    await addDoc(collection(db, "argonautes"), data);
    name.current.value = "";
    adjective.current.value = "";
  };

  return (
    <div>
      <form onSubmit={(e) => handleArgonaute(e)}>
        <input type="text" name="name" id="name" ref={name} />
        <input type="text" name="adjective" id="adjective" ref={adjective} />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreateArgonaute;
