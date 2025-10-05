import Button from "./createButton";
import { AddTask, UpdateTask } from "./Dialog";

// List item constructor
function List(task) {
  //task list
  this.taskItem = document.createElement("li");
  //task checker input
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.id = task.id;
  this.taskItem.appendChild(inputCheck);

  //task title
  const title = document.createElement("h3");
  title.textContent = task.title;
  this.taskItem.appendChild(title);

  // task due
  const due = document.createElement("p");
  due.textContent = task.due;
  this.taskItem.appendChild(due);

  // Create Edit button
  this.editBtn = new Button(
    ["icon-btn", "edit"],
    "edit"
  ).getButtonWithoutText();
  this.taskItem.appendChild(this.editBtn);

  // Create Delete button
  const deleteBtn = new Button(
    ["icon-btn", "delete"],
    "delete"
  ).getButtonWithoutText();
  deleteBtn.addEventListener("click", () => alert("Delete clicked"));
  this.taskItem.appendChild(deleteBtn);

  // Create read button
  const readBtn = new Button(
    ["icon-btn", "view"],
    "description"
  ).getButtonWithoutText();
  
  readBtn.addEventListener("click", () => alert("Read clicked"));
  this.taskItem.appendChild(readBtn);

  // event listener for the item
  inputCheck.addEventListener("click", () => {
    this.taskItem.classList.toggle("checked");
  });
}

function Wrapper(inbox, data) {
  //inbox body wrapper
  this.inboxListBodyWrapper = document.createElement("div");
  this.inboxListBodyWrapper.classList.add("inbox-list-body-wrapper");

  //inbox body
  const inboxListBody = document.createElement("ul");
  inboxListBody.classList.add("inbox-list-body");

  //going through the data and keeping tabs on update functionality
  data.tasks.forEach((task) => {
    const list = new List(task);
    list.editBtn.addEventListener("click", () => {
      const updater = new UpdateTask(inbox, task);
      updater.open();
    });
    inboxListBody.appendChild(list.taskItem);
  });

  this.inboxListBodyWrapper.appendChild(inboxListBody);

  // add new task button the List Body Wrapper
  this.button = new Button(
    ["common", "special"],
    "add_circle",
    "Add Task"
  ).getButtonWithText();

  // add event listener
  this.button.addEventListener("click", () => {
    // append the dialog to the wrapper
    const dialog = new AddTask(inbox);
    dialog.open();
  });
  // append the button to wrapper
  this.inboxListBodyWrapper.appendChild(this.button);
}

export default Wrapper;
