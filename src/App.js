import React, { useState } from 'react';
import './css/App.css';
import SoundBar from './Soundbar';
import Center from './Center';
import LeftPanel from './LeftPanel';
import RightPanel from "./RightPanel";

function App() {
    const [currentTask, setCurrentTask] = useState({});
    return (
        <div className="body">
            <LeftPanel />
            <Center currentTask={currentTask} setCurrentTask={setCurrentTask} />
            <RightPanel currentTask={currentTask} setCurrentTask={setCurrentTask} />
        </div>
    );
}

export default App;