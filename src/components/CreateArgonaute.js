import React, { useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addArgonaute, getArgonautes } from "../feature/argonaute.slice";
import { db } from "../utils/firebase.config";

const CreateArgonaute = () => {
  const name = useRef();
  const adjective = useRef();
  const dispatch = useDispatch();

  const handleArgonaute = async (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      adjective: adjective.current.value,
    };

    await addDoc(collection(db, "argonautes"), data).then(() => {
      dispatch(addArgonaute(data));
      getDocs(collection(db, "argonautes")).then((res) =>
        dispatch(
          getArgonautes(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
      );
      name.current.value = "";
      adjective.current.value = "";
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleArgonaute(e)}>
        <input type="text" name="name" id="name" ref={name} required />
        <input
          type="text"
          name="adjective"
          id="adjective"
          ref={adjective}
          required
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreateArgonaute;
