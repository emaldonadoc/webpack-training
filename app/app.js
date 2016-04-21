import React from "react";
import Greeting from "./components/greeting/greeting";
import ReactDom from "react-dom";

ReactDom.render(<Greeting name="World"/>, document.getElementById('app') );
