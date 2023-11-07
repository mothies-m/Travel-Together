import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export class Navbar extends Component {
  render() {
    return (
      <nav className=''>
        <a href="/" className=''>
          Travel Together
        </a>
        <ul>
          <li>
            <Link to="/join">Join A Crew</Link>
            <Link to="/create">Create A Crew</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar