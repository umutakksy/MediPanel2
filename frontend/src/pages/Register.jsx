import React, { useState } from "react";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kayıt API çağrısı yapılacak
        alert(`Register with ${email}`);
    };

    return (
        <div>
            <h2>Register (Patient)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
