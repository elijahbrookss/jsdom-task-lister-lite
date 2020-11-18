document.addEventListener("DOMContentLoaded", () => {
  createTask();
});

function createTask(){
  submitButton();
}

function submitButton(){
  const taskForm = document.querySelector("#create-task-form");
  const tasksList = document.querySelector("#tasks");
  const inputField = document.querySelector("#new-task-description");

  taskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const userInput = inputField.value + "  ";
    const liElement = document.createElement("li");

    liElement.textContent = userInput;
    tasksList.appendChild(liElement);
    deleteButton(liElement);

    taskForm.reset();
  });
}

function deleteButton(liElement){
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  liElement.appendChild(deleteButton);

  deleteButton.addEventListener("click", function(event) {
    liElement.remove();
  });
}
