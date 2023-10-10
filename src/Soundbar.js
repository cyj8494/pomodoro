import React, { useState, useRef } from 'react';

function SoundBar() {
    const [dragging, setDragging] = useState(false);
    const [volumeHeight, setVolumeHeight] = useState(66); // 초기값 설정
    const volumeBarRef = useRef(null);

    const handleMouseDown = (e) => {
        setDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const rect = volumeBarRef.current.getBoundingClientRect();
            let newHeight = rect.bottom - e.clientY;
            if (newHeight < 0) newHeight = 0;
            if (newHeight > rect.height) newHeight = rect.height;
            setVolumeHeight(newHeight);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleBarClick = (e) => {
        const rect = volumeBarRef.current.getBoundingClientRect();
        let newHeight = rect.bottom - e.clientY;
        if (newHeight < 0) newHeight = 0;
        if (newHeight > rect.height) newHeight = rect.height;
        setVolumeHeight(newHeight);
    };

    return (
        <div className="soundBar">
            <div className="music">
                <div className="musicBtn"></div>
            </div>
            <div className="alarm">
                <div className="alarmBtn"></div>
            </div>
            <div className="volumeContainer">
                <div className="">
                    <div className="volumeBar" ref={volumeBarRef} onClick={handleBarClick}>
                        <div className="volumeActive" style={{ height: `${volumeHeight}px` }}></div>
                        <div
                            className="volumeThumb"
                            onMouseDown={handleMouseDown}
                            style={{ top: `calc(100% - ${volumeHeight}px)` }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="volumeImg">
                <div className="volumeBtn"></div>
            </div>
        </div>
    );
}

export default SoundBar;