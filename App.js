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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { key: 1 }, "I am h1 child"),
  React.createElement("h2", { key: 2 }, "I am h2 child"),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
