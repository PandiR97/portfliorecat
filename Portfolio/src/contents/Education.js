import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E" where="Anna University" to="2018"/>
            <Widecard title="D.C.E" where="Theni Kammavar Sangam Polytechnic College" to="2015"/>
            <Widecard title="SSLC" where="Sri Vikasa Vidhalaya Matriculation School"  to="2012"/>
            </div>
            )
        }
    }
    
export default Education
    