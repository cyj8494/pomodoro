import React, { useState, useEffect } from 'react';

function Center() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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
                    setIsStarted(false);
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

    const resetTimer = () => {
        setIsStarted(false);
        setIsPaused(false);
        setMinutes(25);
        setSeconds(0);
    };

    const togglePauseRestart = () => {
        setIsPaused(!isPaused);
    };

    const radius = 140; // SVG 원의 반지름
    const circumference = 2 * Math.PI * radius;
    const offset = ((minutes * 60 + seconds) / (25 * 60)) * circumference;

    return (
        <div className="center-box">
            <div>
                <div className="mode">
                    <div className="short-break">Short Break</div>
                    <div className="pomodoro">Pomodoro</div>
                    <div className="long-break">Long Break</div>
                </div>
                <div className="timer-container">
                    <div className="leaf"></div>
                    <svg className="timer-svg" width="17.5vw" height="17.5vw" viewBox="0 0 300 300">
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
                            strokeWidth="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform="rotate(-90 150 150)"
                        />
                    </svg>
                    <div className="timer-remaining">
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                    </div>
                </div>
                <div className="timer-control-buttons">
                    {!isStarted ? (
                        <div className="start-button" onClick={() => setIsStarted(true)}>
                            START
                        </div>
                    ) : (
                        <>
                            <div className={isPaused ? "restart-button" : "pause-button"} onClick={togglePauseRestart}>
                                {isPaused ? 'RESTART' : 'PAUSE'}
                            </div>
                            <div className="reset-button" onClick={resetTimer}>
                                RESET
                            </div>
                        </>
                    )}
                </div>
                <div className="currentTaskTxt">Current task</div>
                <div className="currentTask">
                    <div className="currentCheck-image"></div>
                    <div className="taskContent">Read 10 more pages of my favorite book</div>
                    <div className="taskNumber">1 / 1</div>
                    <div className="taskImg"></div>
                </div>
            </div>
        </div>
    );
}

export default Center;