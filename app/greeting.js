import React from "react";

export default React.createClass({
  render: function(){
    return(
      <div className="greeting">
        Helo,{this.props.name}!
      </div>
    );
  }
});
