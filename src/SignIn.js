import React, { useState } from 'react';
import './css/PopUp.css';
import SignUp from './SignUp';
import Arrow from './img/Arrow.svg';
/*import Google from './img/Google.svg';*/
import axios from 'axios';


function SignIn({ onSignUp, onClose }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/user-service/login`, {
                email: email,
                pwd: password,
            })
            .then((response) => {
                if (response.status === 200) {
                    const accessToken = response.headers['token'];
                    const userId = response.headers['userId'];

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('userId', userId);

                    console.log(response.headers);

                    onClose();

                    alert('로그인에 성공했습니다!');
                } else {
                    alert('로그인에 실패했습니다. 다시 시도해주세요!');
                    console.log(response.data);
                }
            })
            .catch((error) => {
                alert('로그인에 실패했습니다. 다시 시도해주세요.');
                console.error(error);
            });
    };

    const [showSignUp, setShowSignUp] = useState(false);

    if (showSignUp) {
        return <SignUp onSignUp={onSignUp} onClose={onClose} />;
    }

    const handleSignUpClick = () => {
        setShowSignUp(true);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>로그인</h2>
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="signUp-button" onClick={login}>
                        로그인
                    <img src={Arrow} alt="Arrow" className="arrow-icon" />
                </button>

                {/*<div className="or">OR</div>
                <button className="google-button">
                    <img src={Google} alt="Google" className="google-icon" />
                    Google로 로그인
                </button>*/}
                <div className="askAccount">
                    계정이 없습니까? <span onClick={handleSignUpClick}>회원가입</span>
                </div>
                <button onClick={onClose} className="close-btn"></button>
            </div>
        </div>
    );
}

export default SignIn;