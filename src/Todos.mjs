import fetch from "node-fetch";
import { API_URL } from "./_config.mjs";

export async function getTodos() {
    try {
        const response = await fetch(`${API_URL}/todos`);
        const todos = await response.json();
        console.log("\nTodos:");
        todos.slice(0, 5).forEach((todo) => {
            console.log(`- ${todo.title} [${todo.completed ? "Done" : "Pending"}]`);
        });
    } catch (error) {
        console.error("Error fetching todos:", error.message);
    }
}
