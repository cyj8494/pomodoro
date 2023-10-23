import React, { useState } from 'react';
import './css/PopUp.css';
import axios from 'axios';

function Account({ onClose }) {

    const [userName, setUserName] = useState('');
    const [userMail, setuserMail] = useState('');

    const nameChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>계정</h2>
                <button onClick={onClose} className="close-btn"></button>

                <div className="taskContainer">
                    <div className="pomodoroContainer">
                        <div className="profileIcon"></div>
                        <div className="accountContainer">
                            <input
                                className="nameInput"
                                value={userName}
                                onChange={nameChange}
                            />
                        <div className="mail">user@email.com</div>
                        </div>
                    </div>

                    <div className="taskAddButtons">
                        <button className="cancelButton" onClick={onClose}>CANCEL</button>
                        <button className="addButton">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;