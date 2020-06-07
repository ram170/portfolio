import React, { Component } from 'react'
import './Personal.css';
import {Animated} from "react-animated-css";

export class Personal extends Component {
    render() {
        return (
            <div className = "basic">
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    { this.props.currentVal === 'LinkedIn' || this.props.currentVal === 'GitHub' || this.props.currentVal === 'Instagram' ?
                    <div>
                        <span> <a href = {this.props.links[this.props.currentVal]} target= '_blank' ><img src = {this.props.icons[this.props.currentVal]} className = {this.props.currentVal === 'Instagram'? "insta" : "imagesm"}></img></a></span>
                        <br></br>
                        <div className = "values">{this.props.object[this.props.currentVal]}</div>
                        <hr></hr>
                    </div>
                    :
                    this.props.currentVal === 'COVID19Tracker' || this.props.currentVal === 'MovieWiki' || this.props.currentVal === 'Puzzle Game' || this.props.currentVal === 'ToDo planner' ?
                        <div>
                            <span className = "namedetails">{this.props.currentVal}</span>
                            <br></br>
                            <br></br>
                            <div className = "values">{this.props.object[this.props.currentVal]}</div>
                            < a href = {this.props.projectLinks[this.props.currentVal]} className = "values" target = "_blank">Check it out</a>
                            <hr></hr>
                        </div>
                        : <div>
                            <span className = "namedetails">{this.props.currentVal}</span>
                            <br></br>
                            <br></br>
                            <div className = "values">{this.props.object[this.props.currentVal]}</div>
                            <hr></hr>
                        </div>
                }
                </Animated>
            </div>
        )
    }
}

export default Personal
