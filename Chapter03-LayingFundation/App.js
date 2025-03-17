import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElemnt-Js Object => HTML Element (when we render it)

const heading = React.createElement("h1", { id: "heading" }, "Good Morning!!");
console.log(heading);

const elm = <span>React Element</span>
//JSX (Transpiled before it reaches the JS) - PARCEL - Bable

//JSX => Bable transpiles it to React.createElemnt (transplied) =>excecute into  ReactElemnt-JS object => HTML Element (render)
const JsxHeading = <h1 id="heading"> Namste React Using JSX!!❤️</h1>; //React Element
console.log(JsxHeading);

//React Component
//Class Based componet - Old way of writing code
//Functional component - New way (Noraml JS Function, it return some JSX)
//Function that returns ReactElemnet
const HeadingComp = () => {
  return <h1>Nmaste React Functional Component from first</h1>;
};

const number = 10000;
//Componnet Composition - Rendering the component inside the another component
const HeadingComp1 = () => (
  <div className="container">
    {/* we can write the js expresion  with {}*/}
    <h2>{number}</h2>
    <HeadingComp />
    {/* It sanitice the data and pass it to {}  to prevent cross-sites scriting attack*/}
    {elm}
    <h1 className="heading">Nmaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JsxHeading); //Render react element not react component

root.render(<HeadingComp1 />);
