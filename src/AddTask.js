import React, { useState } from 'react';
import './css/PopUp.css';
import axios from 'axios';

function AddTask({ onClose }) {
    const [pomodoros, setPomodoros] = useState(1);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Task 추가</h2>
                <button onClick={onClose} className="close-btn"></button>

                <div className="taskContainer">
                    <div className="taskQuestion">What are you working on?</div>

                    <div className="pomodoroContainer">
                        <div className="estimatedPomodoros">Estimated pomodoros</div>
                        <div className="timeControls">
                            <button className="minusButton" onClick={() => setPomodoros(Math.max(0, pomodoros - 1))}>-</button>
                            <span className="pomodoroCount">{pomodoros}</span>
                            <button className="plusButton" onClick={() => setPomodoros(pomodoros + 1)}>+</button>
                        </div>
                    </div>

                    <textarea className="notesInput" placeholder="Notes..."></textarea>

                    <div className="taskAddButtons">
                        <button className="cancelButton" onClick={onClose}>CANCEL</button>
                        <button className="addButton">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;