import React, { useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addArgonaute, getArgonautes } from "../feature/argonaute.slice";

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
    <div className="create-argonaute">
      <form onSubmit={(e) => handleArgonaute(e)}>
        <div className="infos-argonaute">
          <label>
            Nom:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Saisissez un nom"
              ref={name}
              required
            />
          </label>

          <label>
            Adjectif:
            <input
              type="text"
              name="adjective"
              id="adjective"
              placeholder="Saisissez un adjectif"
              ref={adjective}
              required
            />
          </label>
        </div>
        <input type="submit" value="Ajouter" id="submit" />
      </form>
    </div>
  );
};

export default CreateArgonaute;
