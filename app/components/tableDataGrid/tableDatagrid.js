import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';


class TableDatagrid extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>
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
