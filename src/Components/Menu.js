import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return(
      <div className="Menu">
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
        <hr />
      </div>
    )
  }
}

export default Menu