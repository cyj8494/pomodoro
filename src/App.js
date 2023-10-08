import React from 'react';
import './App.css';
import profile from './img/Profile icon.svg';
import rank from './img/Rank icon.svg';
import setting from './img/Settings icon.svg';
import vector from './img/Group 25.svg';

function App() {
  return (
      <div className="body">
          <div className="leftPanel">
              <div className="profile">
                  <img src={profile} alt="profile" />
              </div>
              <div className="ranking">
                  <div className="rank">
                      <img src={rank} alt="rank" />
                  </div>
              </div>
              <div className="setting">
                  <img src={setting} alt="setting" />
              </div>
              <div className="vector">
                  <img src={vector} alt="vector" />
              </div>


          </div>
      </div>
  );
}

export default App;
