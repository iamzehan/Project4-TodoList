//styles
import "./style.css";

//peripherals
import template from "./empty.html";
import data from "./Data.json";

//components
import Wrapper from "../sub-components/createListCards.js";

class Common {
  constructor(content) {

    //main body wrapper
    this.inbox = document.createElement("div");
    this.inbox.classList.add("inbox");

    //page title
    this.pageTitle = document.createElement("h1");
    this.pageTitle.classList.add("page-title");
    this.pageTitle.textContent = "Inbox";
    this.inbox.appendChild(this.pageTitle);

    // content
    this.content = content;
    this.content.appendChild(this.inbox);
  }
}

class EmptyBody extends Common {
  constructor(content) {
    super(content);
    this.inboxEmptyBody = document.createElement("div");
    this.inboxEmptyBody.classList.add("inbox-empty-body");
    this.inboxEmptyBody.innerHTML += template;
    this.inbox.appendChild(this.inboxEmptyBody);
  }
}

class Populate extends Common {
  constructor(content) {
    super(content);
    // append the List Body Wrapper
    this.wrapper = new Wrapper(this.inbox, data);
    this.inbox.appendChild(this.wrapper.inboxListBodyWrapper);
  }
}

function Inbox(content) {
  const hasTasks = data?.tasks?.length > 0;
  const Page = hasTasks ? Populate : EmptyBody;
  return new Page(content);
}

export default Inbox;
