import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [zip, setZip] = useState("");
    const [hashedPassword, setHashedPassword] = useState("");

    const submitSignup = async () => {
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({
                username: username,
                email: email,
                zip: zip,
                hashed_password: hashedPassword,
            }),
            headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(
            'http://localhost:8000/api/users/',
            fetchConfig
        );

        if (response.ok) {
            const newAccount = await response.json();
            console.log("requst good");
            console.log(newAccount);
        } else {
            console.log("Request unable to process")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSignup();
        console.log(hashedPassword)
    };

    return (
        <div className='signup'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div>
                    <label>Username</label>
                    <input
                    type="username"
                    placeholder="Username"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Zip</label>
                    <input
                    type="zip"
                    placeholder="Zip"
                    value={zip} onChange={(e) => setZip(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type="hashedPassword"
                    placeholder="Password"
                    value={hashedPassword} onChange={(e) => setHashedPassword(e.target.value)}
                    required
                    />
                </div>
                <button type='submit'> Submit </button>
            </form>
        </div>
    );
};

export default SignupForm;
