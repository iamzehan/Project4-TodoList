import "./style.css";
import template from "./empty.html";
import data from "./Data.json";

//wrapper
const inbox = document.createElement("div");
inbox.classList.add("inbox");

//page title
const pageName = document.createElement("h1");
pageName.classList.add("page-title");
pageName.textContent = "Inbox";
inbox.appendChild(pageName);

//inbox body
const inboxListBody = document.createElement("ul");
inboxListBody.classList.add("inbox-list-body");
inbox.appendChild(inboxListBody);

if (data.tasks.length == 0) {
  const inboxEmptyBody = document.createElement("ul");
  inboxEmptyBody.classList.add("inbox-empty-body");
  inbox.appendChild(inboxEmptyBody);
  inboxEmptyBody.innerHTML += template;
} else {
  data.tasks.forEach((task, index) => {
    //task list
    const taskItem = document.createElement("li");
    const title = document.createElement("h3");
    title.textContent = task.title;
    taskItem.appendChild(title);
    const due = document.createElement("p");
    due.textContent = task.due;
    taskItem.appendChild(due);
    inboxListBody.appendChild(taskItem);
  });
  const button = document.createElement("button");
  button.classList.add("common")
  button.innerHTML = '<span class="icon">add</span><text>Add Task</text>'
  inboxListBody.appendChild(button);
}
export default inbox;
