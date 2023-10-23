import React, { useState } from 'react';
import './css/App.css';
import SoundBar from './Soundbar';
import Center from './Center';
import LeftPanel from './LeftPanel';
import RightPanel from "./RightPanel";

function App() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleOpenSignIn = () => {
        setShowSignIn(true);
    };

    const handleOpenSignUp = () => {
        setShowSignIn(false);
        setShowSignUp(true);
    };

    const handleClosePopup = () => {
        setShowSignIn(false);
        setShowSignUp(false);
    };

  return (
      <div className="body">
          <LeftPanel
              showSignIn={showSignIn}
              showSignUp={showSignUp}
              handleOpenSignIn={handleOpenSignIn}
              handleOpenSignUp={handleOpenSignUp}
              handleClosePopup={handleClosePopup}
          />

          <Center />
          <SoundBar />
          <RightPanel />
      </div>
  );
}

export default App;
