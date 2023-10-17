import React, { useState } from 'react';
import './css/App.css';
import profile from './img/Profile icon.svg';
import rank from './img/Rank icon.svg';
import setting from './img/Settings icon.svg';
import logout from './img/Group 25.svg';
import SoundBar from './Soundbar';
import Center from './Center';
import SignIn from './SignIn';
import SignUp from './SignUp';
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
          <div className="leftPanel">
              <div className="profile">
                  <img
                      src={profile}
                      alt="profile"
                      onClick={handleOpenSignIn}
                  />
              </div>
              {showSignIn && <SignIn onSignUp={handleOpenSignUp} onClose={handleClosePopup} />}
              {showSignUp && <SignUp onClose={handleClosePopup} />}
              <div className="ranking">
                  <div className="rank">
                      <img src={rank} alt="rank" />
                  </div>
              </div>
              <div className="setting">
                  <img src={setting} alt="setting" />
              </div>
              <div className="logout">
                  <img src={logout} alt="logout" />
              </div>
          </div>

          <Center />
          <SoundBar />
          <RightPanel />
      </div>
  );
}

export default App;
