import React from "react";

export default function Login() {
    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Giriş Yap</h2>
                <form>
                    <input className="w-full p-2 border border-gray-300 rounded mb-4" type="email" placeholder="Email" />
                    <input className="w-full p-2 border border-gray-300 rounded mb-6" type="password" placeholder="Şifre" />
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Giriş</button>
                </form>
            </div>
        </div>
    );
}
