import { User } from "@/api";

export function mapUser(userData: User): User {
    return {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        image: userData.image,
    };
}
