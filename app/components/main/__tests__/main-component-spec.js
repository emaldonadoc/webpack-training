import React, {Component} from 'react'
import TestUtils from 'react-dom/lib/ReactTestUtils'
import Main from '../main-component'
import sinon from 'sinon'

describe( 'Main Spec', () => {

  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it('Main content with default state "people:[]"', () =>{
    server.respondWith("GET", "http://localhost:9999/people", [
        200,
        {"Content-Type": "application/json"},
        '{"people":[]}'
    ]);
    let main = TestUtils.renderIntoDocument(<Main />);
    server.respond();
    let people = TestUtils.scryRenderedDOMComponentsWithClass(main, 'person');
    expect(main).toBeTruthy();
    expect(people.length).toEqual(0);
  })

  it('Main content update state ', () =>{
   server.respondWith("GET", "http://localhost:9999/people", [
       200,
       {"Content-Type": "application/json"},
       '{"people":[{"firstName":"death", "lastName":"maldonado"},{"firstName":"home", "lastName":"home"}]}'
   ]);
    let main = TestUtils.renderIntoDocument(<Main />);
    server.respond();
    let people = TestUtils.scryRenderedDOMComponentsWithClass(main, 'person');
    expect(people.length).toEqual(2);
  });

})
