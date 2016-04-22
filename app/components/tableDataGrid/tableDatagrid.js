import React,{Component} from 'react';
import DataGrid from 'react-datagrid';
import css from 'react-datagrid/index.css';

let columns = [
  {name: 'index', title: '#', width: 50},
  {name: 'firstName'},
  {name: 'lastName'},
  {name: 'city'},
  {name: 'email'}
]

class TableDatagrid extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <style>{css}</style>
        <DataGrid
          idProperty='id'
          dataSource={this.props.renderData}
          columns={columns}
        />
      </div>
    );
  }

}

module.exports = TableDatagrid;
