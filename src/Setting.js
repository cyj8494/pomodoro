import React, { useState } from 'react';
import './css/detail.css';
import axios from 'axios';

function Setting({ onClose }) {

    const [pomodoros, setPomodoros] = useState(25);
    const [shortBreak, setShortBreak] = useState(5);
    const [longBreak, setLongBreak] = useState(15);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>설정</h2>
                <button onClick={onClose} className="close-btn"></button>

                <div className="settingContainer">
                    <div className="settingMenu">시간(분)</div>
                    <div className="pomodoroContainer">
                        <div className="timerSetting"> Pomodoro </div>
                        <div className="timerSetting">Short Break</div>
                        <div className="timerSetting">Long Break</div>
                    </div>
                    <div className="pomodoroContainer">
                        <div className="timeControls">
                            <button className="minusButton" onClick={() => setPomodoros(Math.max(0, pomodoros - 1))}>-</button>
                            <span className="pomodoroCount">{pomodoros}</span>
                            <button className="plusButton" onClick={() => setPomodoros(pomodoros + 1)}>+</button>
                        </div>
                        <div className="timeControls">
                            <button className="minusButton" onClick={() => setShortBreak(Math.max(0, shortBreak - 1))}>-</button>
                            <span className="pomodoroCount">{shortBreak}</span>
                            <button className="plusButton" onClick={() => setShortBreak(shortBreak + 1)}>+</button>
                        </div>
                        <div className="timeControls">
                            <button className="minusButton" onClick={() => setLongBreak(Math.max(0, longBreak - 1))}>-</button>
                            <span className="pomodoroCount">{longBreak}</span>
                            <button className="plusButton" onClick={() => setLongBreak(longBreak + 1)}>+</button>
                        </div>
                    </div>
                    <div className="pomodoroContainer">
                        <div className="settingMenu">Break 자동 시작</div>
                        <div className="toggle"></div>
                    </div>
                    <div className="pomodoroContainer">
                        <div className="settingMenu">Pomodoro 자동 시작</div>
                        <div className="toggle"></div>
                    </div>

                    <div className="taskAddButtons">
                        <button className="addButton">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;