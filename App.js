/* const heading = React.createElement(
  "h1",
  { id: "heading", className: "Head Tag" },
  "Hello World from React!!"
);

console.log(heading); //Not HTML, It's react Element (Normal JS Object)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render method is responsible for converting the react element into the HTML Tag */

// Creating the nested tags using react

/*  <div id="parent">
   <div id="child">
     <h1>I'm the h1 tag</h1>
     <h2>I'm the h2 tag</h2>
     
   </div>
 </div>;

 ReactElement(Object) =>HTML(Browser Understand);

 if we want to render the multiple childers (as siblling), we have to mention it using array[] in the third parameter
  */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
