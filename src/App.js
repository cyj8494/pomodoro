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
          <div className="rightPanel">
              <div className="sidePanelPick">
                  <div className="myTasksButton">My Tasks</div>
                  <div className="myRecordButton">My Records</div>
              </div>
              <div className="dateText">Today: October</div>
              <div className="todayFocus">
                  <div className="">
                      <div className="recordText">Today, you have focused for</div>
                      <div className="recordDetails"></div>
                      <div className="recordTime"></div>
                      <div className="frame">
                          <div className="tomato"></div>
                          <div className="multiplier"></div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
