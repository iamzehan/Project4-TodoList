import "./style.css";
import template from "./empty.html";
import data from "./Data.json";

class Button {
  constructor(classNames = [], icon, text) {
    this.classNames = classNames;
    this.icon = icon;
    this.text = text;
    this.button = document.createElement("button");
  }
  classAdd() {
    this.classNames.forEach((className) => {
      this.button.classList.add(className);
    });
  }
  getButtonWithText() {
    this.classAdd();
    this.button.innerHTML = `<span class="icon">${this.icon}</span><text>${this.text}</text>`;
    return this.button;
  }
  getButtonWithoutText() {
    this.classAdd();
    this.button.innerHTML = `<span class="icon">${this.icon}</span>`;
    return this.button;
  }
}

//wrapper
const inbox = document.createElement("div");
inbox.classList.add("inbox");

//page title
const pageName = document.createElement("h1");
pageName.classList.add("page-title");
pageName.textContent = "Inbox";
inbox.appendChild(pageName);
//inbox body wrapper
const inboxListBodyWrapper = document.createElement("div");
inboxListBodyWrapper.classList.add("inbox-list-body-wrapper");
inbox.appendChild(inboxListBodyWrapper);
//check if we have tasks
const noData = data.tasks.length == 0;

if (noData) {
  const inboxEmptyBody = document.createElement("div");
  inboxEmptyBody.classList.add("inbox-empty-body");
  inbox.appendChild(inboxEmptyBody);
  inboxEmptyBody.innerHTML += template;
} else {
  //inbox body
  const inboxListBody = document.createElement("ul");
  inboxListBody.classList.add("inbox-list-body");
  inbox.appendChild(inboxListBody);
  data.tasks.forEach((task, index) => {
    //task list
    const taskItem = document.createElement("li");
    inboxListBody.appendChild(taskItem);

    //task checker input
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.id = index;
    taskItem.appendChild(inputCheck);

    //task title
    const title = document.createElement("h3");
    title.textContent = task.title;
    taskItem.appendChild(title);

    // task due
    const due = document.createElement("p");
    due.textContent = task.due;
    taskItem.appendChild(due);

    // edit and delete button
    let buttons = ["edit", "delete"];
    buttons.forEach((button) => {
      const btn = new Button(["icon-btn", button], button);
      taskItem.appendChild(btn.getButtonWithoutText());
    });

    // event listener for the item
    taskItem.addEventListener("click", () => {});
  });
  inboxListBodyWrapper.appendChild(inboxListBody);
  const button = new Button(["common", "special"], "add_circle", "Add Task");
  inboxListBodyWrapper.appendChild(button.getButtonWithText());
}
export default inbox;
