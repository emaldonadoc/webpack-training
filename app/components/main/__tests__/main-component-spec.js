import React, {Component} from 'react'
import TestUtils from 'react-dom/lib/ReactTestUtils'
import Main from '../main-component'
import sinon from 'sinon'

describe( 'Main Spec', () => {

  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
    server.respondWith("GET", "http://localhost:9999/people",
                       [200, { "Content-Type": "application/json;charset=UTF-8" },
                       '{"people":[{"firstName":"death", "lastName":"maldonado"},{"firstName":"home", "lastName":"home"}]']);
  });

  afterEach(function () {
    server.restore();
  });

  it('Main content with default state "people:[]"', () =>{
    let main = TestUtils.renderIntoDocument(<Main />);
    let people = TestUtils.scryRenderedDOMComponentsWithClass(main, 'person');
    expect(main).toBeTruthy();
    expect(people.length).toEqual(0);
  })

  it('Main content update state ', () =>{
    let main = TestUtils.renderIntoDocument(<Main />);
    let people = TestUtils.scryRenderedDOMComponentsWithClass(main, 'person');
    expect(people.length).toEqual(2);
  });

})
