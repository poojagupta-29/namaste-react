/**
 *
 * lets try to create below strucrure with manually React CDN code
 *
 * <div id="parent">
 *     <div class="child1">
 *          <h1>I am child H1</h1>
 *      </div>
 *      <div class="child2">
 *          <h2>I am child H2</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";


/* Creating using React /*
  // const parent = React.createElement("div", { id: "parent" }, [
  //   React.createElement("h1", { key: 1 }, "I am h1 child"),
  //   React.createElement("h2", { key: 2 }, "I am h2 child"),
  // ]);
  // console.log(parent);

  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(parent);


/* Creating using JSX/ React Elements */
const jsxheading = <h1 id="heading">Learning React</h1>

/* React Componenets
  - 1. Function Components - NEW way
  - 2. Class Components - OLD way
*/ 

// Functional Comp.

// injecting react element into React comp
const reactElem = <span>React Element</span>

const Heading1 = () => {
  return <h1 id="heading">Heading one and added {reactElem}</h1>;
}
const Heading2 = () => (
  <div className="container">

    {/* 1. this is also know an Comp. Composition which means nested comp. 
        2. comp. can we written in 3 ways
    */}
    
    <Heading1/>  
    <Heading1></Heading1> 
    {Heading1()}
    
    <h2 id="heading2">Heading Two</h2>
  </div>  
)


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxheading)
root.render(<Heading2/>) // to render comp, we need to pass comp only because Babel understands JSX not React