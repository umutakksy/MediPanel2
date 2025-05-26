import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { authUser, logout } = useAuthStore();

    return (
        <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
            <Link to="/" style={{ marginRight: 10 }}>
                Home
            </Link>
            {authUser ? (
                <>
                    <Link to="/profile" style={{ marginRight: 10 }}>
                        Profile
                    </Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" style={{ marginRight: 10 }}>
                        Login
                    </Link>
                    <Link to="/signup">Sign Up</Link>
                </>
            )}
        </nav>
    );
}
