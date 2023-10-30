import React, { useState, useEffect } from 'react';
import AddTask from "./AddTask";
import './css/RightPanel.css';
import Account from './Account';

function RightPanel() {
    const [showTaskAdd, setShowTaskAdd] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const [notes, setNotes] = useState("");
    const [pomodoros, setPomodoros] = useState("");
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const storedSessions = JSON.parse(localStorage.getItem('sessions') || "[]");
        setSessions(storedSessions);

    }, []);

    function addTask() {
        setShowTaskAdd(true);
    }
    function modifyAccount() {
        setShowAccount(true);
    }
    function toggleSection(section) {
        if (expandedSection === section) {
            setExpandedSection(null);
        } else {
            setExpandedSection(section);
        }
    }

    return (
        <div className="rightPanel">
            <div className="sidePanelPick">
                <div className="myTasksButton">My Tasks</div>
                <div className="myRecordButton">My Records</div>
            </div>
            <div className="container">
                <div className="dateText">Today: October</div>
                <div className="focus-box">
                    <div className="record">
                        <div className="record-heading">
                            Today, you have focused for
                        </div>
                        <div className="record-details">
                            <div className="record-time">
                                <span className="large-number">50</span>
                                Minutes &&nbsp;
                                <span className="large-number">23</span>
                                Seconds
                            </div>
                            <div className="image-box">
                                <div className="times-two">2x</div>
                                <div className="image"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="completed">
                    Completed
                    <span
                        className={`down-arrow ${expandedSection === 'completed' ? 'up-arrow' : ''}`}
                        onClick={() => toggleSection('completed')}>
                    </span>
                    { expandedSection === 'completed' &&
                        <div className="hiddenContent">
                            <div className="focus-box">
                                <div className="record">
                                    <div className="record-heading">
                                        Today, you have focused for
                                    </div>
                                    <div className="record-details">
                                        <div className="record-time">
                                            <span className="large-number">50</span>
                                            Minutes &&nbsp;
                                            <span className="large-number">23</span>
                                            Seconds
                                        </div>
                                        <div className="image-box">
                                            <div className="times-two">2x</div>
                                            <div className="image"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> }
                </div>
                <div className="to-do">
                    To-do
                    <span
                        className={`down-arrow ${expandedSection === 'todo' ? 'up-arrow' : ''}`}
                        onClick={() => toggleSection('todo')}>
                    </span>
                    { expandedSection === 'todo' &&
                        sessions.map(session => (
                            <div className="hiddenContent" key={session.id}>
                                <div className="task-box">
                                    <div className="taskStatus">Uncompleted</div>
                                    <div className="sessionContent">{session.notes}</div>
                                    <div className="sessionPomodoro">{session.pomodoros}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="taskPlus">
                <div className="addTask" onClick={addTask}></div>
                <div className="vector" onClick={modifyAccount}></div>
            </div>

            { showTaskAdd && <AddTask onClose={() => setShowTaskAdd(false)} /> }
            { showAccount && <Account onClose={() => setShowAccount(false)} /> }
        </div>
    );
}

export default RightPanel;