const todoList = [];
function add() {
    const inputELement = document.getElementById("input-todo");
    todoList.push(inputELement.value);
    inputELement.value = "";

    renderTodoList();
}

function renderTodoList() {
    const ListContainer = document.getElementById("list-container");
    ListContainer.innerHTML = "";

    for(const todoItem of todoList) {
        ListContainer.innerHTML += `<div class="list-item">
            <input type="checkbox" /> ${todoItem}
            </div>`;
    }
}