import React from "react";
import ReactDom from "react-dom";
import TestUtils from 'react/lib/ReactTestUtils';
import Greeting from '../greeting';
import GreetingDispatcher from '../../dispatchers/greetingDispatcher';

describe('GreetingSpec',() =>{

  beforeEach(()=>{
    spyOn(GreetingDispatcher,'dispatch');
  });

  it('renders', ()=>{
    //given
    var element = TestUtils.renderIntoDocument(<Greeting name="World"/>);
    var buttons=TestUtils.scryRenderedDOMComponentsWithTag(element, 'button');

    //when
    TestUtils.Simulate.click(buttons[0]);

    //then
    expect(element).toBeTruthy();
    expect(ReactDom.findDOMNode(buttons[0]).getAttribute('disabled')).toEqual('disabled');
    expect(GreetingDispatcher.dispatch).toHaveBeenCalled();
  });
});
