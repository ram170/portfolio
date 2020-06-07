import React, { Component } from 'react';
import './details.css';
import Personal from './personalDetails/Personal';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Animated} from "react-animated-css";
import CodeIcon from '@material-ui/icons/Code';
import './personalDetails/Personal.css'

export class Details extends Component {
    state = {
        detailTitles: ['Name', 'Date of birth', 'Hobbies', 'LinkedIn', 'GitHub', 'Instagram'],
        projectValues: ['COVID19Tracker', 'MovieWiki', 'Puzzle Game', 'ToDo planner'],
        socialMediaIcons: {
            'LinkedIn': 'https://img.icons8.com/plasticine/2x/linkedin.png',
            'GitHub': 'https://pngimg.com/uploads/github/github_PNG40.png',
            'Instagram': 'data:image/jpeg;base64,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'
        },
        myLinks: {
            'LinkedIn': 'https://www.linkedin.com/in/sriram-r-024a2719b/',
            'GitHub': 'https://github.com/ram170',
            'Instagram': 'https://www.instagram.com/highaf_lel/'
        },
        details: {'Name': 'Sriram R', 'Date of birth': '2nd June 1999', 'Hobbies': 'Watching series, anime & movies, playing guitar & games', 'LinkedIn': 'A glimpse of my professional life', 'GitHub': "Know about the projects that I'm working on", 'Instagram': "It's a ghost town"},
        projectObject: {'COVID19Tracker': 'This will give coronavirus stats of each country', 'MovieWiki': "Poor man's IMDB x Yify cross", 'Puzzle Game': 'A simple matrix puzzle game made using C', 'ToDo planner': 'Site where you can keep track of your ToDos' },
        projectLinks: {'COVID19Tracker': 'https://ram170.github.io/covid19tracker/', 'MovieWiki': 'https://ram170.github.io/MovieWiki/', 'Puzzle Game': 'https://github.com/ram170/Puzzle-Game', 'ToDo planner': 'https://ram170.github.io/ToDoReact/'},
        personalDetails: false,
        skillDetails: false,
        projectDetails: false,
        experienceDetails: false,
    }

    personalDetails = () => {
        this.setState( { personalDetails: !this.state.personalDetails} )
    }

    skillDetails = () => {
        this.setState( { skillDetails: !this.state.skillDetails} )
    }

    projectDetails = () => {
        this.setState( { projectDetails: !this.state.projectDetails} )
    }

    experienceDetails = () => {
        this.setState( { experienceDetails: !this.state.experienceDetails} )
    }

    render() {
        return (
            <div>


                <div className = "detailsToggle margin" onClick = { this.personalDetails } > Personal Details { this.state.personalDetails?<KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon></KeyboardArrowDownIcon> } </div>  
                <br></br>
                { this.state.personalDetails ? 
                    <div className = "grid margin">
                        { this.state.detailTitles.map((value) => <div> {
                        <Personal currentVal = {value} object = {this.state.details} icons = {this.state.socialMediaIcons} links = {this.state.myLinks}> </Personal>
                        } </div> )}                  
                    </div> : ''
                }


                <div className = "detailsToggle margin" onClick = { this.skillDetails }> Skills { this.state.skillDetails?<KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon></KeyboardArrowDownIcon> } </div>
                <br></br>
                { this.state.skillDetails ? 
                    <div className = "grid margin">
                        <div class="container1 grid-item">
                            <div class ="whichSkill">Front-end</div>
                            <br></br>
                            <CodeIcon fontSize = "large" className = "dummyIcon"></CodeIcon>
                            <div class="overlay">
                                <div class="text">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS </li>
                                        <li>JS Frameworks: </li>
                                        <ol><li>React</li><li>Ember</li></ol>
                                        <li>Ruby on Rails </li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="container1 grid-item">
                            <div class ="whichSkill">Back-end</div>
                            <br></br>
                            <CodeIcon fontSize = "large" className = "dummyIcon"></CodeIcon>
                            <div class="overlay">
                                <div class="text">
                                    <ul>
                                        <li>Python</li>
                                        <li>Ruby on Rails </li>
                                        <li>C </li>
                                        <li>C++ </li>
                                        <li>Java (beginner)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="container1 grid-item">
                            <div class ="whichSkill">Strong-suite</div>
                            <br></br>
                            <CodeIcon fontSize = "large" className = "dummyIcon"></CodeIcon>
                            <div class="overlay">
                                <div class="text">
                                    <ul>
                                        <li>OOPS</li>
                                        <li>Data Structures </li>
                                        <li>Algorithms </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    : ''
                }
                { this.state.skillDetails? <br></br> : '' }


                 <div className = "detailsToggle margin" onClick = { this.projectDetails }> Projects { this.state.projectDetails?<KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon></KeyboardArrowDownIcon> } </div>
                 <br></br>
                 { this.state.projectDetails?
                    <div className = "grid margin">
                    { this.state.projectValues.map((value) => <div> {
                    <Personal currentVal = {value} object = {this.state.projectObject} icons = {this.state.socialMediaIcons} links = {this.state.myLinks} projectLinks = {this.state.projectLinks}> </Personal>
                    }</div> )}                  
                </div> : ''
                }
                { this.state.projectDetails? <center><div> Checkout my GitHub to see source code of the projects <br></br><br></br> </div></center> : '' }


                <div className = "detailsToggle margin" onClick = { this.experienceDetails }> Experience { this.state.experienceDetails?<KeyboardArrowUpIcon></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon></KeyboardArrowDownIcon> } </div>
                { this.state.experienceDetails?
                    <div className = "grid margin">
                        <div></div>
                        <div className = "exp">
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <br></br>
                                <center><span className = "expName">Freshworks</span></center>
                                <br></br>
                                <div>
                                    <b>Position:</b> <i>Software Engineer - Intern</i> <br></br>
                                    <b>Period:</b> <i>Jan 2020 - current*</i> <br></br>
                                </div>
                            </Animated>
                        </div>
                    </div>
                    : '' }
            </div>
        )
    }
}

export default Details
