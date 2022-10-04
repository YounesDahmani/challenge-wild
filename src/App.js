import React, { useEffect, useState } from "react";
import CreateArgonaute from "./components/CreateArgonaute";
import { db } from "./utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import Argonaute from "./components/Argonaute";

const App = () => {
  const [argonautes, setArgonautes] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "argonautes")).then((res) =>
      setArgonautes(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
  return (
    <div>
      <CreateArgonaute />
      <div>
        {argonautes.length > 0 &&
          argonautes.map((argonaute) => (
            <Argonaute argonaute={argonaute} key={argonaute.id} />
          ))}
      </div>
    </div>
  );
};

export default App;
