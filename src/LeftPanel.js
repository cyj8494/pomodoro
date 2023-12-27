import React, { useState } from 'react';
import profile from './img/Profile icon.svg';
import rank from './img/Rank icon.svg';
import setting from './img/Settings icon.svg';
import logout from './img/Group 25.svg';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Ranking from './Ranking';
import Profile from './Profile';

function LeftPanel() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showRanking, setShowRanking] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

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

    const openRanking = () => {
        setShowRanking(true);
    };

    const openProfile = () => {
        setShowProfile(true);
    }

    return (
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
                    <img src={rank} alt="rank" onClick={openRanking}/>
                </div>
            </div>
            {showRanking && <Ranking onClose={() => setShowRanking(false)} />}
           {/* <div className="setting">
                <img src={setting} alt="setting" onClick={openSetting} />
            </div>
            */}
            <div className="logout">
                <img src={logout} alt="logout"  />
            </div>

        </div>
    );
}

export default LeftPanel;