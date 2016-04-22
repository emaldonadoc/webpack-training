import React,{Component} from 'react';
import DataGrid from 'react-datagrid';

let columns = [
  {name: 'index', title: '#', width: 50},
  {name: 'firstName'},
  {name: 'lastName'},
  {name: 'city'},
  {name: 'email'}
]

class TableDatagrid extends Component {

  render(){
    return(
      <div>
        <DataGrid
          idProperty='id'
          dataSource={[]}
          columns={columns}
          style={{height: 500}}
        />
      </div>
    );
  }

}

module.exports = TableDatagrid;
