import React, { useState, useEffect } from 'react';
import AddTask from "./AddTask";
import './css/RightPanel.css';
import Account from './Account';

function RightPanel() {
    const [showTaskAdd, setShowTaskAdd] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // 현재 페이지에 따라 표시해야 할 태스크를 계산합니다.
    const paginatedTasks = tasks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]"); // 'sessions'를 'tasks'로 변경
        setTasks(storedTasks);
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
                    <div className="hiddenDiv">
                        { expandedSection === 'todo' && (
                            <>
                                {paginatedTasks.map(task => (
                                    <div className="hiddenContent" key={task.id}>
                                        <div className="task-box">
                                            <div className="taskStatus">Uncompleted</div>
                                            <div className="sessionContent">{task.notes}</div>
                                            <div className="sessionPomodoro">{task.pomodoros}</div>
                                        </div>
                                    </div>
                                ))}

                                {tasks.length > itemsPerPage && (  // 태스크가 4개 이상일 때만 페이지네이션 컨트롤을 보여줍니다.
                                    <div className="pagination">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                        >
                                            이전
                                        </button>
                                        <span>{currentPage}</span>
                                        <button
                                            onClick={() => setCurrentPage(prev => (prev * itemsPerPage < tasks.length ? prev + 1 : prev))}
                                            disabled={currentPage * itemsPerPage >= tasks.length}
                                        >
                                            다음
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
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