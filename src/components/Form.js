import React, { useState } from 'react'
import './Form.css';

const Form = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const [errUsername, setErrUsername] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errRepassword, setErrRepassword] = useState('');

    const validateForm = (e) => {
        e.preventDefault();
        if (username.length === 0) {
            setErrUsername('กรุณาป้อนข้อมูล');
        } else {
            setErrUsername('');
        }

        if (!email.includes('@') || email.length === 0) {
            setErrEmail('กรุณาป้อนอีเมลให้ถูกต้อง');
        } else {
            setErrEmail('');
        }

        if (password.length === 0 || password.length < 8) {
            setErrPassword('กรุณาป้อนรหัสผ่านให้ถูกต้อง หรือมากกว่า 8 ตัว');
        } else {
            setErrPassword('');
        }

        if (repassword !== password) {
            setErrRepassword('รหัสผ่านไม่ตรง');
        } else {
            setErrRepassword('');
        }

        if (!errUsername && !errPassword && !errEmail && !errRepassword) {
            alert(`Successfully: ${username} ${email} ${password} ${repassword}`);
        }

    };

    return (
        <div className='container'>
            <form className='form' onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className='form-control'>
                    <label>ชื่อผู้ใช้</label>
                    <input type='text' style={{ borderColor: `${errUsername ? '#FF4400' : '#f0f0f0'}` }} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <small>{errUsername}</small>
                </div>
                <div className='form-control'>
                    <label>อีเมล</label>
                    <input type='email' style={{ borderColor: `${errEmail ? '#FF4400' : '#f0f0f0'}` }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small>{errEmail}</small>
                </div>
                <div className='form-control'>
                    <label>รหัสผ่าน</label>
                    <input type='password' style={{ borderColor: `${errPassword ? '#FF4400' : '#f0f0f0'}` }} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <small>{errPassword}</small>
                </div>
                <div className='form-control'>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type='password' style={{ borderColor: `${errRepassword ? '#FF4400' : '#f0f0f0'}` }} value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                    <small>{errRepassword}</small>
                </div>
                <button type='submit'>ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default Form