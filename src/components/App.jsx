import React from "react";
import Login from "./Login";
const isLoggedIn = false;

function App() {
  return <div className="container">{isLoggedIn && <h1>Hello</h1>}</div>;
}
// isloggedIn?<h1>Hello </h1> :<Login />
// isloggedIn?<h1>Hello </h1> :null
export default App;
