import React, { useState, useEffect } from 'react';
import './css/PopUp.css';

function AddTask({ onClose, onAdd }) {
    const [pomodoros, setPomodoros] = useState(1);
    const [notes, setNotes] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    const getMaxId = () => {
        if (tasks.length === 0) return 0;
        return Math.max(...tasks.map(task => task.id));
    }

    const saveStorage = () => {
        const newTask = {
            id: getMaxId() + 1,
            notes: notes,
            pomodoros: pomodoros,
            status: 'U'
        };

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        onClose();
        onAdd();
    };

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

                    <textarea
                        className="notesInput"
                        placeholder="Notes..."
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    ></textarea>

                    <div className="taskAddButtons">
                        <button className="cancelButton" onClick={onClose}>CANCEL</button>
                        <button className="addButton" onClick={saveStorage}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;