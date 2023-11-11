import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='flex flex-row p-4 mb-4 justify-between text-white font-Recursive'>
          <a href="/" className='shrink w-12 h-6'>
            Travel Together
          </a>
          <div className='flex flex-row justify-end'>
            <div className='m-2'>
              <Link to="/join">Join A Crew</Link>
            </div>
            <div className='m-2'>
              <Link to="/create">Create A Crew</Link>
            </div>
            <div className='m-2'>  
              <Link to="/about">About Us</Link>
            </div>
            <div className='m-2'>
              <Link to="/contacts">Contacts</Link>
            </div>
            <div className='m-2'>  
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>  
        </nav>
      </div>
    )
  }
}

export default Navbar