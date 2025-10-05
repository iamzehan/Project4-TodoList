import "./style.css";
import template from "./empty.html";
import data from "./Data.json";
import Button from "./sub-components/createButton.js";
//components
import { Dialog } from "./sub-components/Dialog.js";
import Wrapper from "./sub-components/createListCards.js";

//wrapper
const inbox = document.createElement("div");
inbox.classList.add("inbox");

// append the dialog to the wrapper
const dialog = new Dialog();
inbox.appendChild(dialog.getDialog());

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
  const wrapper = new Wrapper(data);
  inbox.appendChild(wrapper.inboxListBodyWrapper);
  wrapper.button.addEventListener("click", () => {
    dialog.open();
  });
}

export default inbox;
