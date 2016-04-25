import React, {Component} from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import TableDatagrid from '../tableDatagrid';

describe('Datagrid Spec',()=>{

  it('render datagrid element',()=>{
      let columns = [
          { key: 'id', name: 'ID', locked : true },
          { key: 'task', name: 'Title', width: 200, locked : true },
          { key: 'priority', name: 'Priority', width: 200 }
      ];

      let rowGetter =[{
        id: 1,
        task: 'Task 1',
        complete: 100,
        priority : 'Critical',
    }];

    var datagrid = TestUtils.renderIntoDocument(<TableDatagrid  columns={columns} rowGetter={rowGetter} rowsCount={rowGetter.length} minHeight={500} />);

    expect(datagrid).toBeTruthy();
    var headers = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'widget-HeaderCell__value');
     var rows = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'react-grid-Row');
    expect( headers.length ).toEqual(3);
    expect( rows.length ).toEqual(1);
  });
});
