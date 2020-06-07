import React, { Component } from 'react';
import './Cover.css';
import myImage from './myImage.jpg';

export class Cover extends Component {

    render() {
        return (
            <div>
                <div className = "cover">
                    <div className = "name">SRIRAM R</div>
                    <br></br>
                    <br></br>
                </div>
                <center>
                    <span className = "circle">
                    <img src = { myImage } className = "image"></img>
                    </span>
                </center>
            </div>
        )
    }
}

export default Cover
