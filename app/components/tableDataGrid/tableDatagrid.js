import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';

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
        <DataGrid
          idProperty='id'
          dataSource={this.props.renderData}
          columns={columns}
        />


        <ReactDataGrid
              enableCellSelect={true}
              columns={this.props.renderData}
              rowGetter={this.props.getRowAt}
              rowsCount={this.props.size}
              onGridRowsUpdated={this.props.handleGridRowsUpdated}
              toolbar={<Toolbar onAddRow={this.props.handleAddRow}/>}
              enableRowSelect={true}
              rowHeight={50}
              minHeight={600}
              rowScrollTimeout={200}
              />
      </div>
    );
  }

}

module.exports = TableDatagrid;
