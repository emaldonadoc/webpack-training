import React from "react";
import TestUtils from 'react/lib/ReactTestUtils';
import Greeting from '../greeting';

describe('GreetingSpec',() =>{
  it('renders', ()=>{
    var element = TestUtils.renderIntoDocument(<Greeting name="World"/>);
    expect(element).toBeTruthy();
  });
});
