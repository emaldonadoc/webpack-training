const normalize =  require("./styles/normalize.css")
const skeleton = require("./styles/skeleton.css")
const app = require("./styles/app.less")

import React from "react"
import ReactDom from "react-dom"
import Header from "./components/header/header-component"
import Main from "./components/main/main-component"

ReactDom.render(<Header/>, document.getElementsByTagName('header')[0] );
ReactDom.render(<Main/>, document.getElementsByTagName('main')[0] );
