const requestTodo = (method, url, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (payload) {
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.send(payload);
}

$("#registBtn").on("click", () => {
    const newTodo = new Todo(1, $("#content").val(), new Date(), false);
    requestTodo("POST", "http://localhost:3000/todos", JSON.stringify(newTodo));
});









