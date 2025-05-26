// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    // Kullanıcı bilgisi ve rolü global state'den alınabilir (Zustand, Context vb)
    const user = null; // Örnek: {role: "patient", name: "Ali"}

    if (!user) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                {user.role === "patient" && (
                    <Route path="/*" element={<PatientDashboard />} />
                )}
                {user.role === "doctor" && (
                    <Route path="/*" element={<DoctorDashboard />} />
                )}
                {user.role === "admin" && <Route path="/*" element={<AdminDashboard />} />}
                {/* Sekreter benzer şekilde */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
