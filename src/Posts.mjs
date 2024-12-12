import fetch from "node-fetch";
import { API_URL } from "./_config.mjs";

export async function getPosts() {
    try {
        const response = await fetch(`${API_URL}/posts`);
        const posts = await response.json();
        console.log("\nPosts:");
        posts.slice(0, 20).forEach((post) => {
            console.log(`- ${post.title}`);
        });
    } catch (error) {
        console.error("Error fetching posts:", error.message);
    }
}
