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

export default class TableDatagrid extends Component {
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

  componentWillMount (){
    console.log("component Will mount before render");
  }

  componentDidMount (){
    console.log("component Did mount before render");
  }


}
