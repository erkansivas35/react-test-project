import React from 'react'
import axios from 'axios'

class PersonList extends React.Component {
  state = {
    personDetail: [],
    isLoading: true
  }
  componentDidMount() {
    let pathname = this.props.location.pathname.substr(1).split('/')[1]

    axios.get(`https://jsonplaceholder.typicode.com/users/${pathname}`)
      .then(res => {
        const personDetail = res.data
        this.setState({ personDetail, isLoading: false })
      })
  }
  render() {
    return (
      <div className="PersonList">
        <div className="personDetail">
          <p className="loading">{this.state.isLoading ? 'Loading...' : ''}</p>
          
          <h2>USER DETAIL </h2>
          <div className={this.state.isLoading ? 'hidden': ''}>
            <h3>
              {this.state.personDetail.name}<br />
              <small>{this.state.personDetail.username}</small>
            </h3>
            <p>
              {this.state.personDetail.phone}
            </p>
            <p>
              <a target="_blank" href={'http://' + this.state.personDetail.website}>{this.state.personDetail.website}</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonList