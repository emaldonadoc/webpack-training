import React,{Component} from 'react';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <p>Header component</p>
      </div>
    );
  }

  componentWillMount (){
    console.log("component Will mount before render");
  }

  componentDidMount (){
    console.log("component Did mount before render");
  }


}
