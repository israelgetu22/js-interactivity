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
