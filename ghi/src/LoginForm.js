import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [hashedPassword, setHashedPassword] = useState("");

    const submitLogin = async () => {
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({
                email: email,
                hashed_password: hashedPassword,
            }),
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        };

        const response = await fetch(
            'http://localhost:8000/api/users/login',
            fetchConfig
        );

        if (response.ok) {
            const loginUser = await response.json();
            console.log(loginUser)
        } else {
            console.log("Unable to login")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin();
    };

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>
            <h1>Login</h1>
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
                <label>Password</label>
                <input
                type="password"
                placeholder="Password"
                value={hashedPassword} onChange={(e) => setHashedPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
