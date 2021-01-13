import React, { Component } from 'react';
import './header.scss';


class Header extends Component {
    render() {
        return(
            <div className="header">
                  <img className="logo" src={process.env.PUBLIC_URL + '/logo192.png'} alt="" /> 
                    <div className="tabs">
                        <a href="/" className="choice active">Calendar</a>
                        <a href="/"  className="choice">Patients</a>
                        <a href="/" className="choice">Chat</a>
                    </div>
                    <div className="user-section">
                        <img className="alert" src={process.env.PUBLIC_URL + '/alert.png'} alt="" />
                        <img className="user-icon" src={process.env.PUBLIC_URL + '/user.svg'} alt="" />
                        <div className="details">
                            <div className="director">Director</div>
                            <div className="user-name">Islam Nader</div>
                        </div>
                        <img className="arrow-down" src={process.env.PUBLIC_URL + '/down.png'} alt="" />
                    </div>
            </div>
        );
    }
}

export default Header