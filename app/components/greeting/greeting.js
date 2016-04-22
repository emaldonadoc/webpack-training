import React,{ Component} from "react";
import GreetingDispatcher from "../../dispatchers/greetingDispatcher"

class Greeting extends Component{

  constructor(props) {
    super(props);
  }

  /*callActions(options){
    GreetingDispatcher.dispatch(options);
  }*/

   addUser(e){
    GreetingDispatcher.dispatch({
      action: 'NEW_USER'
    });
  }

   removeUser(e){
     GreetingDispatcher.dispatch({
      action: 'REMOVE_USER'
    });
  }

  render() {
    return(
      <div className="greeting">
        <p>Helo,{this.props.name}!</p>
        <button id="add-user-btn" onClick={this.addUser} type="button"> Add User! </button>
        <button id="remove-user-btn" onClick={this.removeUser} type="button"> Remove User! </button>
      </div>
    );
  }
}

module.exports = Greeting;
