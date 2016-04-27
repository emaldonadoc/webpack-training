import React, {Component} from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import TableDatagrid from '../tableDatagrid';

describe('Datagrid Spec',()=>{

  it('render datagrid element',()=>{

      let rowGetter =[{
        id: 1,
        task: 'Task 1',
        complete: 100,
        priority : 'Critical',
    }];

    var datagrid = TestUtils.renderIntoDocument(
                          <TableDatagrid  columns={getColumns()}
                                          rowGetter={rowGetter}
                                          rowsCount={rowGetter.length}
                                           minHeight={500} />);

    expect(datagrid).toBeTruthy();
    var headers = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'widget-HeaderCell__value');
     var rows = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'react-grid-Row');
    expect( headers.length ).toEqual(3);
    expect( rows.length ).toEqual(1);
  });

  it('render datagrid without elements', ()=>{

    var datagrid = TestUtils.renderIntoDocument(
                          <TableDatagrid  columns={getColumns()}
                                          rowGetter={[]}
                                          rowsCount={0}
                                           minHeight={500} />);

    var headers = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'widget-HeaderCell__value'),
        rows = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'react-grid-Row');

    expect( headers.length ).toEqual(3);
    expect( rows.length ).toEqual(0);
  })
});

function getColumns(){
  return [
      { key: 'id', name: 'ID', locked : true },
      { key: 'task', name: 'Title', width: 200, locked : true },
      { key: 'priority', name: 'Priority', width: 200 }
  ];
}
