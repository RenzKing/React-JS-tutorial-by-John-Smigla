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

// const author = "David Flanagan";
// const title = "JavaScript: The Definitive Guide";
// const img = "https://m.media-amazon.com/images/I/913tvBe7OOL._AC_UY218_.jpg";

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book author={author} title={title} img={img} />
//       <Book author={author} title={title} img={img} />
//     </section>
//   );
// };

const books = [
  {
    author: "David Flanagan",
    title: "Javascript",
    img: "https://m.media-amazon.com/images/I/913tvBe7OOL._AC_UY218_.jpg",
  },
  {
    author: "Renz",
    title: "JS",
    img: "https://m.media-amazon.com/images/I/913tvBe7OOL._AC_UY218_.jpg",
  },
];

const names = ["john", "peter", "Susan"];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});
// const Image = () => {
//   return <img src={img} alt={title}></img>;
// };

// const Title = () => {
//   return <h2>{title}</h2>;
// };

// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4>{author}</h4>;
// };

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
