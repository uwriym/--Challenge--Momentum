const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintDone(event) {
  const checkBox = event.target;
  checkBox.innerText = "✔︎";
  checkBox.innerText.style.color = "green";
}
function deleteDone(event) {
  const checkBox = event.target
checkBox.innerText = "";
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  li.classList.add("todo-list-item");
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");
  checkBox.addEventListener("click", deleteToDo);
  checkBox.addEventListener("mouseover", paintDone);
  checkBox.addEventListener("mouseleave", deleteDone);
  toDoList.appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(span);
}

function submitToDo(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  localStorage.setItem("newToDoName", newToDo);
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
