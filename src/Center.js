import React, { useState, useEffect } from 'react';
import './css/Center.css';

function Center({ currentTask, setCurrentTask }) {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [maxTime, setMaxTime] = useState(25);

    useEffect(() => {
        let interval;
        if (isStarted && !isPaused) {
            if (seconds > 0) {
                interval = setInterval(() => {
                    setSeconds(seconds => seconds - 1);
                }, 1000);
            } else if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                    setIsStarted(false);  // Start 버튼만 나오도록
                    resetTimer(25);       // 기본값 25:00으로 재설정
                } else {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(59);
                }
            }
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isStarted, isPaused, seconds]);

    const fetchLocalStorage = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]");
        const activeTask = storedTasks.find(task => task.status === 'C');
        if (activeTask) {
            setCurrentTask(activeTask);
        } else {
            setCurrentTask({}); // 현재 태스크가 없는 경우 빈 객체로 설정
        }
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때 localStorage에서 데이터를 불러옴
        fetchLocalStorage();

        const onStorageChange = (e) => {
            if (e.key === 'tasks') { // 'tasks' 키에 대한 변경사항 확인
                fetchLocalStorage();
            }
        };

        window.addEventListener('storage', onStorageChange);

        return () => {
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    const togglePauseRestart = () => {
        setIsPaused(!isPaused);
    };

    const radius = 115; // SVG 원의 반지름
    const circumference = 2 * Math.PI * radius;
    const offset = ((minutes * 60 + seconds) / (maxTime * 60)) * circumference;

    const renderGrayCircle = () => {
        return (
            <>
                <circle cx="150" cy="150" r="120" fill="none" stroke="#F2F2F2" strokeWidth="10" />
                <circle cx="150" cy="150" r="110" fill="none" stroke="#F2F2F2" strokeWidth="10" />
            </>
        );
    };


    const resetTimer = (minutesValue) => {
        setIsStarted(false);
        setIsPaused(false);
        setMinutes(minutesValue);
        setSeconds(0);
        setMaxTime(minutesValue);
    };

    const setShortBreak = () => {
        resetTimer(5);
    };

    const setLongBreak = () => {
        resetTimer(15);
    };

    const setPomodoro = () => {
        resetTimer(25);
    }

    const startTimer = () => {
        setIsStarted(true);
        if (minutes === 0 && seconds === 0) {
            switch(maxTime) {
                case 5:
                    setShortBreak();
                    break;
                case 15:
                    setLongBreak();
                    break;
                default:
                    setPomodoro();
            }
        }
    };

    return (
        <div className="center-box">
            <div>
                <div className="mode">
                    <div className="short-break" onClick={setShortBreak}>Short Break</div>
                    <div className="pomodoro" onClick={setPomodoro}>Pomodoro</div>
                    <div className="long-break" onClick={setLongBreak}>Long Break</div>
                </div>
                <div className="timer-container">
                    <div className="leaf"></div>
                    <svg className="timer-svg" width="17.5vw" height="17.5vw" viewBox="0 0 300 300">
                        {renderGrayCircle()}
                        <circle
                            r={radius}
                            cx="150"
                            cy="150"
                            fill="none"
                            stroke="#E66C6C"
                            strokeWidth="10"
                        />
                        <circle
                            r={radius}
                            cx="150"
                            cy="150"
                            fill="none"
                            stroke="#F2F2F2"
                            strokeWidth="12"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform="rotate(-90 150 150)"
                        />
                        {
                            // 주위에 24개의 작은 원을 추가
                            Array.from({ length: 24 }).map((_, index) => (
                                <circle
                                    key={index}
                                    cx="150"
                                    cy="15"
                                    r="4.5"
                                    fill="#FEBEBE"
                                    transform={`rotate(${index * 15} 150 150)`}
                                />
                            ))
                        }
                    </svg>
                    <div className="timer-remaining">
                        {String(minutes).padStart(2, '0')}
                        <span className="colon">:</span>
                        {String(seconds).padStart(2, '0')}
                    </div>
                </div>
                <div className="timer-control-buttons">
                    {!isStarted ? (
                        <div className="start-button" onClick={startTimer}>
                            START
                        </div>
                    ) : (
                        <>
                            <div className={isPaused ? "restart-button" : "pause-button"} onClick={togglePauseRestart}>
                                {isPaused ? 'START' : 'PAUSE'}
                            </div>
                            <div className="reset-button" onClick={() => resetTimer(maxTime)}>
                                RESET
                            </div>
                        </>
                    )}
                </div>
                <div className="currentTaskTxt">Current task</div>
                {currentTask && currentTask.status === 'C' && (
                    <div className="currentTask">
                        <div className="currentCheck-image"></div>
                        <div className="taskContent">{currentTask.notes}</div>
                        <div className="taskNumber">1 / {currentTask.pomodoros}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Center;