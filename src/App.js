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
    <div>
      <CreateArgonaute />
      <div>
        {argonautes &&
          [...argonautes].map((argonaute) => (
            <Argonaute argonaute={argonaute} key={argonaute.id} />
          ))}
      </div>
    </div>
  );
};

export default App;
