$("#new-button").click(function() {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        addTodo(text);
        saveTodos();
    }
});

function addTodo(text) {
    const todo = $("<div></div>");

    todo.text(text);

    todo.click(function() {
        const remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function saveTodos() {
    const todos = [];

    $("#ft_list div").each(function() {
        todos.push($(this).text());
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

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