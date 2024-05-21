import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: ""
    });

    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await(axios.post("/auth/register", inputs));
            navigate("/login");
        } catch(e) {
            setError(e.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input
                    required
                    type="text"
                    placeholder="username"
                    onBlur={handleOnBlur}
                    name="username"
                />
                <input
                    required
                    type="email"
                    placeholder="Your best email"
                    onBlur={handleOnBlur}
                    name="email"
                />
                <input
                    required
                    type="password"
                    placeholder="Password"
                    onBlur={handleOnBlur}
                    name="password"
                />
                <button onClick={handleSubmit}>
                    Register
                </button>
                {err && <p>err</p>}
                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
}

export default Register;
