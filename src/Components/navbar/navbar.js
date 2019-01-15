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
                        <li className="list">Home</li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScyPUBv0OOaM8yg3lRRkhgzybl3i7Pb_VHn7VXjpf-d6J7hbw/viewform"><li className="list">RSVP</li></a>
                        <li className="list">About Us</li>
                    </ul>
                </div>
            </div>
        )
    }
}