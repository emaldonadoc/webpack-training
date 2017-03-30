const headerStyles = require("./header-styles.less");

import React,{Component} from 'react';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul>
        <li><a href="#" className="header-link"><span>Ki<strong>osk</strong></span></a></li>
      </ul>
    );
  }

  componentWillMount (){
    console.log("component Will mount before render");
  }

  componentDidMount (){
    console.log("component Did mount before render");
  }


}
