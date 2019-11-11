import React from "react";

 export default class Footer extends React.Component {
   
  render() {
    
    return ( 
        <div>
             <h1>Hello, world!</h1>
            <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
  }
}