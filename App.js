import React from "react"
import ReactDOM from "react-dom/client";
import App3 from "./App3";
function App () {
    //let message = "comming froom root app.js";
  return (
    <>
      <h1>this is App</h1> 
      <App3></App3>
    </>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
export default App;
