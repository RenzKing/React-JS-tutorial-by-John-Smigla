import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <div>
      <div>
        <h2>My First component</h2>
        <ul>
          <li>
            <a href="#">Link1</a>
          </li>
          <li>
            <a href="#">Link2</a>
          </li>
        </ul>
      </div>
      <h3>Header 3</h3>
    </div>
  );
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello world!")
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
