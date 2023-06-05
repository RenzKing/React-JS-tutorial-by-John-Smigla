import React from "react";
import ReactDOM from "react-dom/client";

// const Greeting = () => {
//   return (
//     <>
//       <h2>My First component</h2>
//       <ul>
//         <li>
//           <a href="#">Link1</a>
//         </li>
//         <li>
//           <a href="#">Link2</a>
//         </li>
//       </ul>
//       <h3>Header 3</h3>
//     </>
//   );
// };

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello world!")
//   );
// };

const Greeting = () => {
  return (
    <>
      <Person />
      <Message />
    </>
  );
};

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
