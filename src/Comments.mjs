import fetch from "node-fetch";
import { API_URL } from "./_config.mjs";

export async function getComments() {
    try {
        const response = await fetch(`${API_URL}/comments`);
        const comments = await response.json();
        console.log("\nComments:");
        comments.slice(0, 5).forEach((comment) => {
            console.log(`- ${comment.name}`);
        });
    } catch (error) {
        console.error("Error fetching comments:", error.message);
    }
}
