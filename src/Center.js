import React, { useState } from 'react';

const Center = () => {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <div className="center-box">
            <div className="">
                <div className="mode">
                    <div className="pomodoro">Pomodoro</div>
                    <div className="short-break">Short Break</div>
                    <div className="long-break">Long Break</div>
                </div>
                <div className="timer-container">
                    <div className="countdown-timer">
                        {/* Timer logic here */}
                    </div>
                </div>
                <div className="timer-control-buttons">
                    {!isStarted ? (
                        <div className="start-button" onClick={() => setIsStarted(true)}>
                            START
                        </div>
                    ) : (
                        <>
                            <div className="pause-button">
                                PAUSE
                            </div>
                            <div className="reset-button">
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