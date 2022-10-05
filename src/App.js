import React, { useEffect } from "react";
import CreateArgonaute from "./components/CreateArgonaute";
import { db } from "./utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Argonaute from "./components/Argonaute";
import { useDispatch, useSelector } from "react-redux";
import { getArgonautes } from "./feature/argonaute.slice";

const App = () => {
  const dispatch = useDispatch();
  const argonautes = useSelector((state) => state.argonautes.argonautes);

  useEffect(() => {
    getDocs(collection(db, "argonautes")).then((res) =>
      dispatch(
        getArgonautes(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      )
    );
  }, []);

  return (
    <div className="app">
      <div className="title">
        <h1>Liste des Argonautes</h1>
        <h3>À destination de Jason.</h3>
      </div>
      <CreateArgonaute />
      <div className="list">
        {argonautes &&
          [...argonautes]
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((argonaute) => (
              <Argonaute argonaute={argonaute} key={argonaute.id} />
            ))}
      </div>
    </div>
  );
};

export default App;
