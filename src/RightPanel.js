import React, { useState, useEffect } from 'react';
import AddTask from "./AddTask";
import './css/RightPanel.css';
import Account from './Account';

function RightPanel({ currentTask, setCurrentTask }) {
    const [showTaskAdd, setShowTaskAdd] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // 현재 페이지에 따라 표시해야 할 태스크 계산
    const paginatedTasks = tasks
        .filter(task => task.status !== 'E')
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const [showCompleted, setShowCompleted] = useState(false);

    const reloadTasks = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]");
        const filteredTasks = storedTasks.filter(task => task.status !== 'E');
        const updatedTasks = filteredTasks.map(task => {
            const storedStatus = sessionStorage.getItem(task.id);
            return { ...task, status: storedStatus ? storedStatus : task.status };
        });
        setTasks(updatedTasks);

        // 현재 태스크의 상태 업데이트
        if (currentTask && currentTask.id) {
            const updatedCurrentTask = updatedTasks.find(task => task.id === currentTask.id);
            if (updatedCurrentTask) {
                setCurrentTask(updatedCurrentTask);
            }
        }
    };

    useEffect(() => {
        reloadTasks();
        const onStorageChange = (e) => {
            if (e.key === 'tasks') {
                reloadTasks();
            }
        };
        window.addEventListener('storage', onStorageChange);
        return () => {
            window.removeEventListener('storage', onStorageChange);
        };
    }, [currentTask]);

    const statusChange = (taskId) => {
        setTasks(prevTasks => {
            let updatedCurrentTask = null;
            const newTasks = prevTasks.map(task => {
                if (task.id === taskId) {
                    const newStatus = task.status === 'U' ? 'C' : 'U';
                    sessionStorage.setItem(task.id, newStatus);
                    if (newStatus === 'C') {
                        updatedCurrentTask = { ...task, status: newStatus };
                    }
                    return { ...task, status: newStatus };
                }

                if (task.status !== 'E') {  // 'E' 상태인 태스크는 건드리지 않습니다.
                    sessionStorage.setItem(task.id, 'U');
                    return { ...task, status: 'U' };
                }
                return task;  // 'E' 상태인 태스크는 그대로 반환합니다.
            });

            setCurrentTask(updatedCurrentTask);
            localStorage.setItem('tasks', JSON.stringify(newTasks));  // 로컬 스토리지에 모든 태스크 상태 업데이트
            return newTasks;
        });
        window.dispatchEvent(new Event('storage'));
    };


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
                    {(expandedSection === 'completed' || showCompleted) &&
                        <div className="hiddenContent">

                            //... content of the completed section
                        </div>
                    }
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
                                            <div className="taskStatus">{task.status === 'C' ? 'Current Task' : 'Uncompleted'}</div>
                                            <div className="sessionContent">
                                <span
                                    style={{ backgroundColor: task.status === 'C' ? '#2BA24C' : '#D4B5B5' }}
                                    onClick={() => statusChange(task.id)}
                                ></span>
                                                <div>{task.notes}</div>
                                            </div>
                                            <div className="sessionPomodoro">총 소요시간 : {task.pomodoros * 25}분</div>
                                        </div>
                                    </div>
                                ))}

                                {tasks.length > itemsPerPage && (  // 태스크가 4개 이상일 때만 페이징 처리
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

            { showTaskAdd && <AddTask onClose={() => setShowTaskAdd(false)} onAdd={reloadTasks} /> }
            { showAccount && <Account onClose={() => setShowAccount(false)} /> }
        </div>
    );
}

export default RightPanel;