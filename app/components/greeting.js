import React from "react";
import GreetingDispatcher from "../dispatchers/greetingDispatcher"

export default React.createClass({
  callActions: function(options){
    GreetingDispatcher.dispatch(options);
  },
  addUser: function(e){
    this.callActions({
      action: 'NEW_USER'
    });
  },
  removeUser: function(e){
    this.callActions({
      action: 'REMOVE_USER'
    });
  },
  render: function(){
    return(
      <div className="greeting">
        <p>Helo,{this.props.name}!</p>
        <button id="add-user-btn" onClick={this.addUser} type="button"> Add User! </button>
        <button id="remove-user-btn" onClick={this.removeUser} type="button"> Remove User! </button>
      </div>
    );
  }
});
