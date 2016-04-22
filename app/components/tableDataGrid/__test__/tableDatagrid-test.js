import React, {Component} from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import TableDatagrid from '../tableDatagrid';

describe('Datagrid Spec',()=>{

  it('render data grid element',()=>{
    var datagrid = TestUtils.renderIntoDocument(<TableDatagrid />);

    var divs = TestUtils.scryRenderedDOMComponentsWithTag(datagrid, 'div');
    console.log(["DATAGRID", divs]);
    expect(datagrid).toBeTruthy();
  });


});
