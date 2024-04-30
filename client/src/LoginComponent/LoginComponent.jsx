import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginComponent.css';

const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (data.user) {
            alert('Login Successful')
            window.location.href = '/quote'
        }
        else {
            alert('Please check your Email or Password')
        }
    }

    return (
        <main className='loginPage'>
            <div className="form-container">
                <p className="title">Login</p>
                <form className="form" name="signupForm" onSubmit={loginUser}>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email" />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="new-password" />
                    <button className="form-btn" type="submit">Login</button>
                </form>
                <p className="sign-up-label">
                    New User?<span className="sign-up-link"><Link to='/register'>Sign up</Link> </span>
                </p>
            </div>
        </main>
    );
};

export default LoginComponent;