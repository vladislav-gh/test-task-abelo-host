import { create as zustandCreate } from "zustand";

import { User } from "@/api";
import { createSelectors } from "@/store";

interface State {
    user: User | null;
    isInitialized: boolean;
}

interface Action {
    setUser(user: State["user"]): void;
    setIsInitialized(value: State["isInitialized"]): void;
}

const defaultValue: State = {
    user: null,
    isInitialized: false,
};

export const useUserStore = zustandCreate<State & Action>()(set => ({
    ...defaultValue,

    setUser: user => set({ user }),

    setIsInitialized: value => set({ isInitialized: value }),
}));

export const useUserState = createSelectors(useUserStore);
