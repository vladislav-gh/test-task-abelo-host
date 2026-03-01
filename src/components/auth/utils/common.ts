import { useUserStore } from "@/components/user";

import { signOut } from "../actions";

export function logout() {
    const { setUser } = useUserStore.getState();

    signOut();
    setUser(null);
}
