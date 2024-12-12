import fetch from "node-fetch";
import { API_URL } from "./_config.mjs";

export async function getUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        const users = await response.json();
        console.log("\nUsers:");
        users.slice(0, 100).forEach((user) => {
            console.log(`- ${user.name} (${user.email})`);
        });
    } catch (error) {
        console.error("Error fetching users:", error.message);
    }
}
