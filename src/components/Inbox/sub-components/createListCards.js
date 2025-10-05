import Button from "./createButton";

// List item constructor
function List(task, index) {
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

  // edit and delete button
  let buttons = ["edit", "delete"];
  buttons.forEach((button) => {
    const btn = new Button(["icon-btn", button], button).getButtonWithoutText();
    btn.id = task.id;
    this.taskItem.appendChild(btn);
  });
  // event listener for the item
  inputCheck.addEventListener("click", () => {
    this.taskItem.classList.toggle("checked");
  });
}

function Wrapper(data) {
  //inbox body wrapper
  this.inboxListBodyWrapper = document.createElement("div");
  this.inboxListBodyWrapper.classList.add("inbox-list-body-wrapper");

  //inbox body
  const inboxListBody = document.createElement("ul");
  inboxListBody.classList.add("inbox-list-body");

  data.tasks.forEach((task, index) => {
    const taskItem = new List(task, index).taskItem;
    inboxListBody.appendChild(taskItem);
  });

  this.inboxListBodyWrapper.appendChild(inboxListBody);

  // add new task button the List Body Wrapper
  this.button = new Button(
    ["common", "special"],
    "add_circle",
    "Add Task"
  ).getButtonWithText();
  this.inboxListBodyWrapper.appendChild(this.button);
}

export default Wrapper;
