import React,{Component} from 'react'

export default class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      people: []
    }
  }

  render(){
    let list = []
    this.state.people.forEach( (person)=> {
      list.push( <li>{person.firstName}, {person.lastName}</li>)
    });
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

}
