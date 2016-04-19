import React from "react";

export default React.createClass({
  buttonClick: function(e){
    e.currentTarget.setAttribute("disabled", "disabled");
  },
  render: function(){
    return(
      <div className="greeting">
        <p>Helo,{this.props.name}!</p>
        <button onClick={this.buttonClick} type="button"> Click Me! </button>
      </div>
    );
  }
});
