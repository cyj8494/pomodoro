import React, { useState } from 'react';
import profile from './img/Profile icon.svg';
import rank from './img/Rank icon.svg';
import setting from './img/Settings icon.svg';
import logout from './img/Group 25.svg';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Ranking from './Ranking';
import Profile from './Profile';
import axios from 'axios';

function LeftPanel() {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showRanking, setShowRanking] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const handleLogout = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            axios.get(`${process.env.REACT_APP_API_URL}/user-service/users`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then(response => {
                    console.log('조회 성공');
                    
                })
                .catch(error => {
                    // 오류 처리
                    console.error('조회 실패', error);
                });
        }
    };


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

            <div className="logout">
                <img src={logout} alt="logout" onClick={handleLogout} />
            </div>

        </div>
    );
}

export default LeftPanel;