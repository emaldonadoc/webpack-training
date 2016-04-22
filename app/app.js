import React from "react";
import Table from "./components/tableDatagrid/tableDatagrid";
import ReactDom from "react-dom";

let data = [
  { id: 0, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
  { id: 1, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
  { id: 2, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'}  
];

ReactDom.render(<Table renderData={data}/>, document.getElementById('app') );
