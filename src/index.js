import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

// const Greeting = () => {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// };

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

const author = "David Flanagan";
const title =
  "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language";
const img = "https://m.media-amazon.com/images/I/913tvBe7OOL._AC_UY218_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <>
      <article className="book">
        <Image />
        <Title />
        <Author />
      </article>
    </>
  );
};

const Image = () => {
  return <img src={img} alt={title}></img>;
};

const Title = () => {
  return <h2>{title}</h2>;
};

const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4>{author}</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
