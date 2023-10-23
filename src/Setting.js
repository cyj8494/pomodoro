import React, { useState } from 'react';
import './css/PopUp.css';
import axios from 'axios';

function Setting({ onClose }) {

    const [pomodoros, setPomodoros] = useState(1);
    const [shortBreak, setShortBreak] = useState(1);
    const [longBreak, setLongBreak] = useState(1);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>설정</h2>
                <button onClick={onClose} className="close-btn"></button>

                <div className="taskContainer">
                    <div className="settingMenu">시간(분)</div>
                    <div className="pomodoroContainer">
                        <div className="timerSetting">Pomodoro</div>
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
                            <span className="pomodoroCount">{pomodoros}</span>
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