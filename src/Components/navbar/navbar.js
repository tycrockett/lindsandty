import * as React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="flexStyle navbar">
                <div className="leftNav">
                    <p>Lindsay & Ty</p>                    
                </div>
                <div className="rightNav">
                    <ul className="flexStyle">
                        <li className="list selected">Home</li>
                        <li className="list">RSVP</li>
                        <li className="list">About Us</li>
                    </ul>
                </div>
            </div>
        )
    }
}