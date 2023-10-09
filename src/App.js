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

          <div className="soundBar">

          </div>

          <div className="rightPanel">
              <div className="sidePanelPick">
                  <div className="myTasksButton">My Tasks</div>
                  <div className="myRecordButton">My Records</div>
              </div>
              <div className="dateText">Today: October</div>

              <div className="container">

                  <div className="focus-box">
                      <div className="record">
                          <div className="record-heading">
                              Today, you have focused for
                          </div>
                          <div className="record-details">
                              <div className="record-time">
                                  <span className="large-number">50</span>
                                  Minutes &&nbsp;
                                  <span className="large-number">23</span>
                                  Seconds
                              </div>
                              <div className="image-box">
                                  <div className="times-two">2x</div>
                                  <div className="image"></div>
                              </div>
                          </div>
                      </div>
                  </div>


              </div>
          </div>
      </div>
  );
}

export default App;
