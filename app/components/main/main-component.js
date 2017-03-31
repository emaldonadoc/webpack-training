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
    this.state.people.forEach( (person, i)=> {
      list.push( <li key="{i}" className="person">{person.firstName}, {person.lastName}</li>)
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
