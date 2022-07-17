import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");

        } catch (err) {
            //console.log(err);
            setError(true);
        }

        //console.log(res);

    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handelSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your user name..."
                    onChange={(e) => setUsername(e.target.value)}>

                </input>
                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your Password..."
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something Went Wrong!</span>}
        </div>
    )
}