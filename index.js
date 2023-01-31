import React from "react";
import ReactDOM from "react-dom/client";
import App3 from "./App3";
//import App3 from "./App3";
//import App from "./App";
//import App1 from "./App1";
//import App2 from "./App2";
/* function Travel()
 {
  return(
    <div>
      <h1 style={{color:"blue"}}>Travel by bus or car</h1>
      <App3></App3>
      <App></App>
      <App2></App2>
      <App1></App1>
    </div>
  );
 }*/
 /*function Hello()
 {
        return(
        <div>
          <App></App>
          <App3></App3>
        </div>  
        )
 }*/
 function Hello()
 {
  return(
    <div>
      <App3></App3>
    </div>  
  )
 }  
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Hello/>);


