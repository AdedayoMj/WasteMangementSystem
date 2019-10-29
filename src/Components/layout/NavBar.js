import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

var FontAwesome = require('react-fontawesome');

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen:false
        }
        this.Toggle = this.Toggle.bind(this);
    }

    Toggle(){
        this.setState(state =>({
            isOpen: !state.isOpen}))
        console.log(this.state)
    }
    render() {
        return (
        <nav className="nav-wrapper grey darken-3">
            <div className="nav-wrapper grey darken-3">
            <div className="container">

            <Link to='/' className="brand-logo w3-xxxlarge 
            w3-container w3-lobster font-effect-brick-sign text-center logo_color">GoFast </Link>
            
            <ul className="right">
            
           <li> <button onClick={this.Toggle}><FontAwesome className='super-crazy-colorsr'name ='align-justify'
                    size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button></li>
            
            </ul>
            
            </div>
          
        </div>
        <div className="container">
            {this.state.isOpen 
            ? <ul className="right drop_container ">
            <Link  to ='/'><a className="toggle_text" href="#">Home</a></Link>
           <Link to='/map'><a className="toggle_text" href="#">Map</a></Link>
           <a className="toggle_text" href="#">Login</a>
            </ul>
            :null
            }
           
          </div>
            
            </nav>
        )
    }
}
