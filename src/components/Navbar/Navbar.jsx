import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const counter = useSelector(state=>state.counter)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Counter App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
       <div className='mx-5'>
         <button className="btn btn-primary" >Counter = {counter}</button>
       </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar