//styles
import "./style.css";

//peripherals
import template from "./empty.html";
import data from "./Data.json";

//components
import Wrapper from "./sub-components/createListCards.js";

//main body wrapper
const inbox = document.createElement("div");
inbox.classList.add("inbox");

//page title
const pageTitle = document.createElement("h1");
pageTitle.classList.add("page-title");
pageTitle.textContent = "Inbox";
inbox.appendChild(pageTitle);

//check if we have tasks
const noData = data.tasks.length == 0;

if (noData) {
  const inboxEmptyBody = document.createElement("div");
  inboxEmptyBody.classList.add("inbox-empty-body");
  inbox.appendChild(inboxEmptyBody);
  inboxEmptyBody.innerHTML += template;
} else {
  // append the List Body Wrapper
  const wrapper = new Wrapper(inbox,data);
  inbox.appendChild(wrapper.inboxListBodyWrapper);
}

export default inbox;
