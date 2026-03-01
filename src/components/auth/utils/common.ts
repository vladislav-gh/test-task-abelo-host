import { useUserStore } from "@/components/user";

import { actionSignOut } from "../actions";

export function logout() {
    const { setUser } = useUserStore.getState();

    actionSignOut();
    setUser(null);
}
