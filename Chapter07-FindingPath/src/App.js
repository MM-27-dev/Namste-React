import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// React.createElement => ReactElemnt-Js Object => HTML Element (when we render it)


const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Body />
      {/* Body 
      Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
