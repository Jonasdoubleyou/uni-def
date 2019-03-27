import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';




console.log("mounting");

window.onload = function() {
  ReactDOM.render(
    <App/>,
    document.getElementById("main")
  );
}
