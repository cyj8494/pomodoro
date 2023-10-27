import React, { useState } from 'react';
import './css/PopUp.css';
import Arrow from './img/Arrow.svg';
import axios from 'axios';

function Profile({ onClose }) {

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>프로필</h2>
                <button onClick={onClose} className="close-btn"></button>

                <div className="taskContainer">
                    <div className="pomodoroContainer">
                        <div className="left-arrow"></div>
                        <div className="profileIcon1"></div>
                        <div className="profileIcon2"></div>
                        <div className="profileIcon3"></div>
                        {/*<div className="profileIcon4"></div>
                        <div className="profileIcon5"></div>
                        <div className="profileIcon6"></div>
                        <div className="profileIcon7"></div>*/}
                        <div className="right-arrow"></div>
                    </div>

                </div>
                <button className="signUp-button">
                    저장
                    <img src={Arrow} alt="Arrow" className="arrow-icon" />
                </button>
            </div>
        </div>
    );
}

export default Profile;