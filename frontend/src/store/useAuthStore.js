import create from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: false,

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const res = await axios.get("/api/auth/me");
            set({ authUser: res.data, isCheckingAuth: false });
        } catch {
            set({ authUser: null, isCheckingAuth: false });
        }
    },

    login: async (credentials) => {
        const res = await axios.post("/api/auth/login", credentials);
        set({ authUser: res.data });
    },

    logout: () => {
        set({ authUser: null });
    },
}));
