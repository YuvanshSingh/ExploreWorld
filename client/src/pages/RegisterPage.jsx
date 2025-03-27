import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post("/register", {
                name,
                email,
                password,
            });
            alert("registration successful. Now you can login.");
        } catch (e) {
            alert("registration failed. Please try again.");
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl" />
                    <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl" />
                    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl" />
                    <button className="w-full bg-red-500 text-white py-2 px-4 rounded-2xl my-1">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have an account? <Link className="underline text-black" to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
