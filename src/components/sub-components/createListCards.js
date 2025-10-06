import Button from "./createButton";
import { AddTask, UpdateTask, DialogReadOnly } from "./Dialog";

// List item constructor
function List(inbox, data, task) {
  this.inbox = inbox;
  this.data = data;
  this.task = task;

  // task list item
  this.taskItem = document.createElement("li");

  // checkbox
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.id = this.task.id;
  this.taskItem.appendChild(inputCheck);

  // task title
  this.title = document.createElement("h3");
  this.title.textContent = this.task.title;
  this.taskItem.appendChild(this.title);

  // task due date
  const due = document.createElement("p");
  due.textContent = this.task.due;
  this.taskItem.appendChild(due);

  // Edit button
  this.editBtn = new Button(["icon-btn", "edit"], "edit").getButtonWithoutText();
  this.taskItem.appendChild(this.editBtn);

  this.editBtn.addEventListener("click", () => {
    const updater = new UpdateTask(this.inbox, this.data, this.task);
    updater.open();
  });

  // Delete button
  this.deleteBtn = new Button(["icon-btn", "delete"], "delete").getButtonWithoutText();
  this.taskItem.appendChild(this.deleteBtn);

  this.deleteBtn.addEventListener("click", () => {
    // Remove the task from data
    this.data.tasks = this.data.tasks.filter(item => item.id !== this.task.id);

    // Update localStorage
    localStorage.setItem("data", JSON.stringify(this.data));

    // Fade-out before removal
    this.taskItem.style.transition = "opacity 0.3s ease";
    this.taskItem.style.opacity = "0";

    setTimeout(() => {
      this.taskItem.remove();

      // Refresh the list if Wrapper instance is available
      if (this.inbox.Wrapper) {
        this.inbox.Wrapper.refresh();
      }
    }, 300);
  });

  // Read button
  this.readBtn = new Button(["icon-btn", "view"], "description").getButtonWithoutText();
  this.taskItem.appendChild(this.readBtn);

  // read button & title both open read-only dialog
  [this.readBtn, this.title].forEach((item) => {
    item.addEventListener("click", () => {
      const viewer = new DialogReadOnly(inbox, this.data, this.task);
      viewer.open();
    });
  });

  // checkbox toggle event
  inputCheck.addEventListener("click", () => {
    this.taskItem.classList.toggle("checked");
  });
}

// Wrapper for inbox task list
function Wrapper(inbox, data) {
  // Store initial data
  localStorage.setItem("data", JSON.stringify(data));
  this.data = JSON.parse(localStorage.getItem("data"));

  // inbox list wrapper
  this.inboxListBodyWrapper = document.createElement("div");
  this.inboxListBodyWrapper.classList.add("inbox-list-body-wrapper");

  // unordered list for tasks
  const inboxListBody = document.createElement("ul");
  inboxListBody.classList.add("inbox-list-body");

  // render all tasks
  this.data.tasks.forEach((task) => {
    const list = new List(inbox, this.data, task);
    inboxListBody.appendChild(list.taskItem);
  });

  // append list to wrapper
  this.inboxListBodyWrapper.appendChild(inboxListBody);

  // Add new task button
  this.button = new Button(["common", "special"], "add_circle", "Add Task").getButtonWithText();

  // add event listener for new task dialog
  this.button.addEventListener("click", () => {
    const dialog = new AddTask(inbox);
    dialog.open();
  });

  // append button to wrapper
  this.inboxListBodyWrapper.appendChild(this.button);

  // Refresh method (reloads tasks from storage and re-renders)
  this.refresh = () => {
    this.data = JSON.parse(localStorage.getItem("data"));
    const listBody = this.inboxListBodyWrapper.querySelector(".inbox-list-body");
    listBody.innerHTML = "";

    this.data.tasks.forEach((task) => {
      const list = new List(inbox, this.data, task);
      listBody.appendChild(list.taskItem);
    });
  };
}

export default Wrapper;