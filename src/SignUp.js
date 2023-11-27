import React, { useState } from 'react';
import './css/Sign.css';
import SignIn from './SignIn';
import Arrow from './img/Arrow.svg';
import Google from './img/Google.svg';
import axios from 'axios';

const SignUp = ({ onClose, onSignUp }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSignIn, setShowSignIn] = useState(false);

    if (showSignIn) {
        return <SignIn onSignUp={onSignUp} onClose={onClose} />;
    }


    const validateForm = () => {
        if (name.trim() === '') {
            alert('이름을 입력해주세요.');
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('유효한 이메일 주소를 입력해주세요.');
            return false;
        }

        if (pwd.length < 6) {
            alert('6글자 이상 입력해주세요.');
            return false;
        }

        if (pwd !== confirmPassword) {
            alert('비밀번호가 맞지 않습니다.');
            return false;
        }

        return true;
    };

    const handleSignUp = async () => {
        if (!validateForm()) return;

        try {
            const response = await axios.post('/user-service/users', {
                name,
                email,
                pwd,
            });

            const data = response.data;

            if (data.success) {
                alert('회원가입에 성공했습니다.');
                onClose();
            } else {
                alert(data.message || '회원가입에 실패했습니다.');
            }
        } catch (error) {
            alert('Error occurred: ' + error.message);
        }
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>회원가입</h2>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className="signUp-button" onClick={handleSignUp}>
                        회원가입
                    <img src={Arrow} alt="Arrow" className="arrow-icon" />
                </button>


                {/*<div className="or">OR</div>
                <button className="google-button">
                    <img src={Google} alt="Google" className="google-icon" />
                    Google로 로그인
                </button>*/}
                <div className="askAccount">
                    계정이 이미 있습니까? <span onClick={() => setShowSignIn(true)}>Login</span>
                </div>
                <button onClick={onClose} className="close-btn"></button>
            </div>
        </div>
    );
};

export default SignUp;