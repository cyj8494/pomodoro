import React, { useState } from 'react';
import AddTask from "./AddTask";
import './css/RightPanel.css';

function RightPanel() {
    const [showTaskAdd, setShowTaskAdd] = useState(false);

    function handleAddTaskClick() {
        setShowTaskAdd(true);
    }

    return (
        <div className="rightPanel">
            <div className="sidePanelPick">
                <div className="myTasksButton">My Tasks</div>
                <div className="myRecordButton">My Records</div>
            </div>
            <div className="dateText">Today: October</div>
            <div className="container">
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
            </div>
            <div className="completed">Completed <span className="down-arrow"></span></div>
            <div className="to-do">To-do <span className="down-arrow"></span></div>
            <div className="taskPlus">
                <div className="addTask" onClick={handleAddTaskClick}></div>
                <div className="vector"></div>
            </div>

            { showTaskAdd && <AddTask onClose={() => setShowTaskAdd(false)} /> }
        </div>
    );
}

export default RightPanel;