import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/PopUp.css';

const Ranking = ({ onClose }) => {

    const [rankingData, setRankingData] = useState({
        myRank: { userNm: '', rankNum: '', minutes: '' },
        allRank: []
    });

    useEffect(() => {
        axios.get('YOUR_API_ENDPOINT')
            .then(response => {

                setRankingData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data', error);
            });
    }, []);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>랭킹</h2>
                <div className="myRank">
                    <div>
                        <div className="profileIcon"></div>
                        <div>
                            <div className="userNm">{rankingData.myRank.userNm}user1</div>
                            <div className="rankNum">#RANK{rankingData.myRank.rankNum}</div>
                            <div className="minutes">{rankingData.myRank.minutes}분</div>
                        </div>
                    </div>
                </div>
                <div className="allRank">
                    {rankingData.allRank.map((rank, index) => (
                        <div key={index}>
                            <div className="allRankNum">{index + 1}</div>
                            <div className="rankProfile"></div>
                            <div className="allRankName">{rank.userNm}</div>
                            <div className="allRankMinutes">{rank.minutes}분</div>
                        </div>
                    ))}
                </div>

                <button onClick={onClose} className="close-btn"></button>
            </div>
        </div>
    );
};

export default Ranking;