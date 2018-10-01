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
    const addressCity = this.state.personDetail.address ? this.state.personDetail.address.city : null;
    const addressStreet = this.state.personDetail.address ? this.state.personDetail.address.street : null;
    const addressSuite = this.state.personDetail.address ? this.state.personDetail.address.suite : null;
    const addressZipcode = this.state.personDetail.address ? this.state.personDetail.address.zipcode : null;
    const addressGeoLat = this.state.personDetail.address ? this.state.personDetail.address.geo.lat : null;
    const addressGeoLng = this.state.personDetail.address ? this.state.personDetail.address.geo.lng : null;
    return (
      <div className="PersonList">
        <div className="personDetail">
          <p className="loading">{this.state.isLoading ? 'Loading...' : ''}</p>
          
          <div className={this.state.isLoading ? 'hidden': ''}>
            <h2>USER DETAIL </h2>
            <h3>
              {this.state.personDetail.name}<br />
              <small>{this.state.personDetail.username}</small>
            </h3>
            <p>
              <b>Address:</b><br />
              {addressCity} {addressStreet} {addressSuite}<br />
              {addressZipcode}
            </p><br />

            <p>
              <b>Map Coordinant:</b><br />
              Lat: {addressGeoLat} Lng: {addressGeoLng}
            </p><br />

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