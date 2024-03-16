import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement => JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// console.log(heading);

// JSX - HTML like or XML like syntax
// JSX (transpiled before it reaches the JS) by parcel - babel
// JSX => React.createElement => ReactElement => JS Object => HTMLElement(render)

const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

// React Component
// Class based component - OLD
// Functional Component - NEW

// React Functional Component
// different syntax

// syntax-1
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};

// syntax-2
const HeadingComponent1 = () => (
  <h1 className="heading">Namaste React Functional Component</h1>
);

// for multiple lines we can use paranthesis
// const HeadingComponent2 = () => (
//   <h1 className="heading">Namaste React Functional Component</h1>
// );

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Component Composition -: component inside component is component composition
// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX🚀
//   </h1>
// );

// const HeadingComponent2 = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// );

// we can write any javascript code inside Component using curly bracket
const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

const HeadingComponent2 = () => (
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

root.render(<HeadingComponent2 />);
