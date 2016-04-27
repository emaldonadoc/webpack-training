import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';


class TableDatagrid extends Component {
  constructor(props){
    super(props);
  }

  showHide(){
    console.log("show hide function");
  }

  render(){
    return(
      <div>
        <button onClick={this.showHide} type="button" > Show/Hide</button>
        <ReactDataGrid
        columns={this.props.columns}
        rowGetter={this.props.rowGetter}
        rowsCount={this.props.rowsCount}
        minHeight={this.props.minHeight} />
      </div>
    );
  }

}

module.exports = TableDatagrid;
