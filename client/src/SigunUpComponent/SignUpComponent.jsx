import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpComponent.css';

const SignUpComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await response.json()
        console.log(data);
    }

    return (
        <main className='loginPage'>
            <div className="form-container">
                <p className="title">Create Account</p>
                <form className="form" name="signupForm" onSubmit={registerUser}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="name" />
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
                    <button className="form-btn" type="submit">Create Account</button>
                </form>
                <p className="login-label">
                    Already have an account?<span className="login-link"><Link to='/'>Log in</Link> </span>
                </p>
            </div>
        </main>
    );
};

export default SignUpComponent;