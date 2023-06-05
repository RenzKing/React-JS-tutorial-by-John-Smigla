import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return <h2>ReactJS Tutorial!</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
