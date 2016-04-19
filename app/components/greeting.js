import React from "react";
import GreetingDispatcher from "../dispatchers/greetingDispatcher"

export default React.createClass({
  buttonClick: function(e){
    e.currentTarget.setAttribute("disabled", "disabled");
    GreetingDispatcher.dispatch({
      action: 'NEW_USER'
    });
  },
  render: function(){
    return(
      <div className="greeting">
        <p>Helo,{this.props.name}!</p>
        <button id="add-user-btn" onClick={this.buttonClick} type="button"> Add User! </button>
        <button id="remove-user-btn" onClick={this.buttonClick} type="button"> Remove User! </button>
      </div>
    );
  }
});
