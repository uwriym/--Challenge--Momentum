const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDo(event) {
  const checkedLi = event.target.parentElement;
  if (checkedLi.getAttribute("checked", "") === null) {
    checkedLi.setAttribute("checked", "");
    checkedLi.setAttribute("style", "text-decoration: line-through");
  } else {
    checkedLi.removeAttribute("checked", "");
    checkedLi.removeAttribute("style", "text-decoration: line-through");
  }
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.id = "delete-btn";
  button.addEventListener("click", deleteToDo);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkbox";
  checkBox.addEventListener("click", checkToDo);
  toDoList.appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(button);
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
