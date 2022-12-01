import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/1.JPG';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Pandi R','I am a web developer']} speed={50} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    