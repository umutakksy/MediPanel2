import { useAuthStore } from "../store/useAuthStore";

export default function ProfilePage() {
    const { authUser } = useAuthStore();

    if (!authUser) return <p>Loading...</p>;

    return (
        <div style={{ maxWidth: 400, margin: "auto" }}>
            <h2>Profile</h2>
            <p>Email: {authUser.email}</p>
            {/* Diğer profil bilgileri buraya */}
        </div>
    );
}
