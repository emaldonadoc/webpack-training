import React, {Component} from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Header from '../tableDatagrid';

describe('Datagrid Spec',()=>{

  it('render datagrid element',()=>{
    var header = TestUtils.renderIntoDocument(<Header />);
    expect(datagrid).toBeTruthy();
  });

  xit('render datagrid with data', ()=>{

    //given
    let data = [
  		{ id: 0, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
      { id: 1, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
      { id: 2, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
      { id: 3, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'}
    ];

    //when
      var datagrid = TestUtils.renderIntoDocument( <TableDatagrid renderData={data} />)
      var headers = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'z-column-header');
      var rows = TestUtils.scryRenderedDOMComponentsWithClass(datagrid, 'z-row');

    //then
      expect( headers.length ).toEqual(5);
      expect( rows.length ).toEqual(4);

  });


});
