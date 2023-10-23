import React from 'react';
import './css/App.css';
import SoundBar from './Soundbar';
import Center from './Center';
import LeftPanel from './LeftPanel';
import RightPanel from "./RightPanel";

function App() {
    return (
        <div className="body">
            <LeftPanel />
            <Center />
            <SoundBar />
            <RightPanel />
        </div>
    );
}

export default App;