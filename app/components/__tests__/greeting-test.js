import React from "react";
import ReactDom from "react-dom";
import TestUtils from 'react/lib/ReactTestUtils';
import Greeting from '../greeting';

describe('GreetingSpec',() =>{
  it('renders', ()=>{
    var element = TestUtils.renderIntoDocument(<Greeting name="World"/>);
    var button=TestUtils.findRenderedDOMComponentWithTag(element,'button');
    TestUtils.Simulate.click(button);
    expect(element).toBeTruthy();
    expect(ReactDom.findDOMNode(button).getAttribute('disabled')).toEqual('disabled');
  });
});
