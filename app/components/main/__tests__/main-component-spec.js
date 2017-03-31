import React, {Component} from 'react'
import TestUtils from 'react-dom/lib/ReactTestUtils';
import Main from '../main-component'

describe( 'Main Spec', () => {

  it('Main content with default state "people:[]"', () =>{
    let main = TestUtils.renderIntoDocument(<Main />);
    let people = TestUtils.scryRenderedDOMComponentsWithClass(main, 'person');
    expect(main).toBeTruthy();
    expect(people.length).toEqual(0);
  })

  it('Main content update state ', () =>{
    let main = TestUtils.renderIntoDocument(<Main />);
    let peopleData = {people:[{firstName:"death", lastName:"maldonado"},{firstName:"home", lastName:"home"}]};

    main.setState(peopleData);

    let people = TestUtils.scryRenderedDOMComponentsWithClass(main, 'person');
    expect(people.length).toEqual(2);
  });

})
