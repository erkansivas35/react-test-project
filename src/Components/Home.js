import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Home extends React.Component {
  state = {
    persons: [],
    isLoading: true
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons, isLoading: false });
      })
  }
  render() {
    return (
      <div className="Home">
        <p className="loading">{this.state.isLoading ? 'Loading...' : ''}</p>
        <h2>USER LIST </h2>
        <ul className={this.state.isLoading ? 'hidden': ''}>
          {this.state.persons.map(person => {
            return (
              <li key={person.id}>
                <Link to={'/personList/' + person.id}>
                  {person.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Home