// get elements from the document:
const addBtn = document.getElementById("addBtn");
const inputField = document.querySelector("input");

//functions to run when the event is called

const list = document.querySelector("ul");

function addMovie(event) {
  event.preventDefault();
  let newMovie = inputField.value;

  let newLi = document.createElement("li");
  let newTi = document.createElement("span");
  newTi.textContent = newMovie;
  newLi.appendChild(newTi);
  list.appendChild(newLi);
}

//add event listener to elements
addBtn.addEventListener("click", addMovie);
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const movies = [];

const addMovie = (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "X";
  span.textContent = input.value;
  span.addEventListener("click", crossOutWord);
  li.append(span);
  li.appendChild(deleteBtn);
  li.addEventListener("click", deleteMovie);
  ul.prepend(li);
  input.value = "";
};

const deleteMovie = (e) => {
  e.target.parentNode.remove();
};

const crossOutWord = (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("checked")) {
    e.target.classList.remove("checked");
    return;
  }
  e.target.className = "checked";
};

form.addEventListener("submit", addMovie);

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const movies = [];

const addMovie = (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "X";
  span.textContent = input.value;
  span.addEventListener("click", crossOutWord);
  li.append(span);
  li.appendChild(deleteBtn);
  li.addEventListener("click", deleteMovie);
  ul.prepend(li);
  input.value = "";
};

const deleteMovie = (e) => {
  e.target.parentNode.remove();
};

const crossOutWord = (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("checked")) {
    e.target.classList.remove("checked");
    return;
  }
  e.target.className = "checked";
};

form.addEventListener("submit", addMovie);
