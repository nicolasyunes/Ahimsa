import React, { Component } from 'react'
import "./NavBar.css"
import logo from "../assets/logo.jpg"
import "./NavBar.css"
export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-inherit">
            <div className="container-fluid">
            <a className="navbar-brand" href="#!">
            <div className="container-nav"> 

                <img className="text-hide" src={logo}  alt="ahimsa cbd ">
                    
                </img>
                <span className="m-2"></span>
            </div>
                    
            </a>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link active"  aria-current="page" href="#!">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#!">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#!">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#!">Contacto</a>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
