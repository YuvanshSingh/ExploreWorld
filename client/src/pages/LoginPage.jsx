import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleLoginSubmit(ev) { 
        ev.preventDefault();
        try {
            await axios.post("/login", {email, password});
            alert("login successful");
        } catch (e) {
            alert("login failed");
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder="your@email.com" value={email} onChange={(ev) => setEmail(ev.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl" />
                    <input type="password" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="w-full border my-1 py-2 px-3 rounded-2xl" />
                    <button className="w-full bg-red-500 text-white py-2 px-4 rounded-2xl my-1">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={"/register"}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}