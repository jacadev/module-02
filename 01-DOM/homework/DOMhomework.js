// const { log } = require("@11ty/eleventy/src/EleventyErrorHandler");

let toDoItems = [];

let author = document.querySelector("#createdBy");
author.innerHTML = author.innerHTML + " Jesus Castillo";

function ToDo(description) {
  this.description = description;
  this.complete = false;
}

ToDo.prototype.completeToDo = function () {
  this.complete = true;
};

function buildToDo(todo, index) {
  let toDoShell = document.createElement("div");
  toDoShell.className = "toDoShell";
  let toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  toDoText.id = index;
  if (todo.complete) {
    toDoText.className = "completeText";
  }
  toDoShell.appendChild(toDoText);
  toDoText.addEventListener("click", completeToDo);
  return toDoShell;
}

function buildToDos(toDos) {
  let array = toDos.map((todo, index) => buildToDo(todo, index));
  return array;
}

function displayToDos() {
  let toDoContainer = document.getElementById("toDoContainer");
  toDoContainer.innerHTML = "";
  let result = buildToDos(toDoItems);
  for (let i = 0; i < result.length; i++) {
    toDoContainer.appendChild(result[i]);
  }
}

function addToDo() {
  let input = document.getElementById("toDoInput");
  if (input.value !== "") {
    let todo = new ToDo(input.value);
    toDoItems.push(todo);
    input.value = "";
    displayToDos();
  }
}

let button = document.getElementById("addButton");
button.addEventListener("click", addToDo);

function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo();
  displayToDos();
}

displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== "undefined") {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  };
}
