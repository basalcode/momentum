const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list")

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const button = document.createElement("button");

    span.innerText = `${newToDo}`;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";

    paintTodo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)