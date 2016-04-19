import React from "react";

export default React.createClass({
  buttonClick: function(e){
    e.currentTarget.setAttribute("disabled", "disabled");
  },
  render: function(){
    return(
      <div className="greeting">
        Helo,{this.props.name}!
        <button onClick={this.buttonClick} type="button"> Click Me! </button>
      </div>
    );
  }
});
