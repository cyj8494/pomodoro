import React from 'react';
import './App.css';
import profile from './img/Profile icon.svg';
import rank from './img/Rank icon.svg';
import setting from './img/Settings icon.svg';
import vector from './img/Group 25.svg';
import SoundBar from './Soundbar';

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

          <div className="center-box">
              <div className="timer-frame">
                  <div className="mode">
                      <div className="pomodoro">Pomodoro</div>
                      <div className="short-break">Short Break</div>
                      <div className="long-break">Long Break</div>
                  </div>
                  <div className="timer-container">
                      <div className="countdown-timer">

                      </div>
                  </div>
                  <div className="timer-control-buttons">
                      <div className="pause-button">
                          START
                      </div>
                  </div>
                  <div className="currentTaskTxt">Current task</div>
                  <div className="currentTask">
                      <div className="currentCheck-image"></div>
                      <div className="taskContent">Read 10 more pages of my favorite book</div>
                      <div className="taskNumber">1 / 1</div>
                      <div className="taskImg"></div>
                  </div>
              </div>
          </div>
          <SoundBar />
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
