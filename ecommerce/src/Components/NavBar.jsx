import React, { Component } from 'react';
import MenuItems from "./MenuItems";
import Button from "./Button";
import './NavBar.css';
 
class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i className=""></i></h1>
                <div className="menu-icon" onclick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.label}   
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign in</Button>
            </nav>
        )
    }
}

export default NavBar