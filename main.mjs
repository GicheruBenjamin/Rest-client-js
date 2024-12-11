import Input from "./src/Input.mjs";
import { getPosts } from "./src/Posts.mjs";
import { getComments } from "./src/Comments.mjs";
import { getTodos } from "./src/Todos.mjs";
import { getUsers } from "./src/Users.mjs";

async function main() {
    console.log("\nWelcome to the app!");
    console.log("------------------------------------");
    console.log("What entity do you want to see?");
    console.log("------------------------------------");
    console.log("1. Posts  2. Comments  3. Todos  4. Users  5. Exit");

    const choice = parseInt(await Input("Enter your choice: "), 10);

    switch (choice) {
        case 1:
            await getPosts();
            break;
        case 2:
            await getComments();
            break;
        case 3:
            await getTodos();
            break;
        case 4:
            await getUsers();
            break;
        case 5:
            console.log("Exiting the app. Goodbye!");
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }
    main(); // Recursive call to the main function
}

main();
