import React, {Component} from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import Header from '../header-component';

describe('Header Spec',()=>{

  it('render header element',()=>{
    var header = TestUtils.renderIntoDocument(<Header />);
    expect(header).toBeTruthy();
  });

});
