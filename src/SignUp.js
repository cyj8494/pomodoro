import React, { useState } from 'react';
import axios from 'axios';
import './css/SignUp.css';

const SignUp = ({ onClose }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateForm = () => {
        if (fullName.trim() === '') {
            alert('이름을 써주세요.');
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('유효한 이메일 주소를 알려주세요.');
            return false;
        }

        if (password.length < 6) {
            alert('6글자 이상 입력해주세요.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('비밀번호가 맞지 않습니다.');
            return false;
        }

        return true;
    };

    const handleSignUp = async () => {
        if (!validateForm()) return;

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    password,
                }),
            });

            const data = await response.json();

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
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="abc@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleSignUp}>SIGN UP</button>
                <div>OR</div>
                <button>Login with Google</button>
                <div>
                    Already have an account? <span onClick={onClose}>Sign in</span>
                </div>
                <button onClick={onClose} className="close-btn">X</button>
            </div>
        </div>
    );
};

export default SignUp;