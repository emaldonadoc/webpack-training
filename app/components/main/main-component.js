import React,{Component} from 'react'
import Request from 'superagent'

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
      list.push( <li key={i} className="person">{person.firstName}, {person.lastName}</li>)
    });
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

  componentDidMount () {
    Request.get('http://localhost:9999/people')
      .end((err, data)=>{
      this.setState(JSON.parse(data.text) )
    })
  }

}
