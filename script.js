let todoList = [];

const listFromLocalStorage = localStorage.getItem("todoList");
if(listFromLocalStorage) {
    todoList = JSON.parse(listFromLocalStorage);

    renderTodoList();
}

function add() {
    const inputELement = document.getElementById("input-todo");
    todoList.push(inputELement.value);
    localStorage.setItem("todoList", JSON.stringify(todoList));
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