import React, { useState } from "react";
import "./App.css";

import Home from "./pages/Home";

function App() {
  const [titles, setTitles] = useState([
    {
      id: "1",
      title: "Hello World",
      leng: 3,
    },
    {
      id: "2",
      title: "Hello Korea",
      leng: 5,
    },
    {
      id: "3",
      title: "Hello Korea",
      leng: 7,
    },
    {
      id: "4",
      title: "Hello Korea",
      leng: 9,
    },
  ]);
  return (
    <div className="App">
      <Home titles={titles} />
    </div>
  );
}

export default App;
