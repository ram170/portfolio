import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Menu.css';
import {Animated} from "react-animated-css";

export class Menu extends Component {
    state = {
        menuOpen : "true",
    }
    changeState = () => {
        let x = this.state.menuOpen;
        this.setState( { menuOpen: !x } );
    }
    render() {
        return (
            <div className = "menu">
                <MenuIcon fontSize = "large" onClick = { this.changeState }></MenuIcon>
                { this.state.menuOpen ?
                <div>
                    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                        <div className = "hint"> Hint: Hover or click on each skill. Click on the above icon to close this hint </div>
                    </Animated>
                </div>
                : '' }
            </div>
        )
    }
}

export default Menu
