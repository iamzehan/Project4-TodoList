import "./style.css";
import Inbox from "./components/Inbox/index.js";
import Add from "./components/AddTask/index.js";

class Controller {
  constructor(lastTarget = null, button, pageContent) {
    // keeping the buttons
    this.lastTarget = lastTarget ? lastTarget : button;
    this.button = button;

    // get the button property that holds it's name
    this.lastTargetText = this.lastTarget.lastElementChild.textContent;
    this.buttonText = this.button.lastElementChild.textContent;

    // get the button classes
    this.lastTargetClass = this.lastTarget.classList;
    this.buttonClass = this.button.classList;

    // finally the content element
    this.pageContent = pageContent;
  }

  setActiveState() {
    const isDifferent = this.buttonText != this.lastTargetText;
    if (isDifferent) {
      this.buttonClass.add("active");
      this.lastTargetClass.remove("active");
    }
    return this.button;
  }

  loadPage() {
    this.pageContent.innerHTML = "";
    let pageName = this.buttonText;
    const isActive = this.buttonClass.contains("active");

    if (pageName == "Inbox" && isActive) {
      Inbox(this.pageContent);
    }
    if (pageName == "Add task" && isActive) {
      Add(this.pageContent);
    }
    if (pageName.includes("notifications")) {
      if (isActive) {
        this.button.lastElementChild.textContent = "notifications";
      }
      this.pageContent.innerHTML = "<h1>Notifications</h1>";
    }
  }
}

const navButtons = document.querySelectorAll("button");
let lastTarget = document.querySelector("button.active");
const pageContent = document.querySelector(".content");
const defaultController = new Controller(null, lastTarget, pageContent);

document.addEventListener("DOMContentLoaded", () => {
  lastTarget = defaultController.setActiveState();
  defaultController.loadPage();
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const controller = new Controller(lastTarget, button, pageContent);
    lastTarget = controller.setActiveState();
    controller.loadPage();
  });
});

const dockButton = document.querySelector("span.dock");
const navBar = document.querySelector("nav");
dockButton.addEventListener("click", () => {
  navBar.classList.toggle("hide");

  if (navBar.classList.contains("hide")) {
    dockButton.textContent = "dock_to_right";
  } else {
    dockButton.textContent = "dock_to_left";
  }
  pageContent.classList.toggle("expand");
});
