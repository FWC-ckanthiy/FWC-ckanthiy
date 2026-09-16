const newButton = document.getElementById("new-button");
const list = document.getElementById("ft_list");

function saveTodos() {
    const todos = [];

    list.querySelectorAll("div").forEach(function(todo) {
        todos.push(todo.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function addTodo(text) {
    const todo = document.createElement("div");

    todo.textContent = text;

    todo.addEventListener("click", function() {
        const remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    list.insertBefore(todo, list.firstChild);
}

newButton.addEventListener("click", function() {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        addTodo(text);
        saveTodos();
    }
});

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(decodeURIComponent(parts.slice(1).join("=")));

            for (let i = todos.length - 1; i >= 0; i--) {
                addTodo(todos[i]);
            }

            break;
        }
    }
}

loadTodos();