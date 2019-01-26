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
                        <a className="list" href="#aboutus">About Us</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScyPUBv0OOaM8yg3lRRkhgzybl3i7Pb_VHn7VXjpf-d6J7hbw/viewform" className="list"><li >RSVP</li></a>
                        <a href="https://goo.gl/maps/AowMFr7QTsP2"><li className="list">Directions</li></a>
                    </ul>
                </div>
            </div>
        )
    }
}