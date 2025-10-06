import "./style.css";
import Inbox from './components/Inbox/index.js';
import Add from "./components/AddTask/index.js";

function setActiveState(lastTarget, button){
   if (
      button.lastElementChild.textContent !=
      lastTarget.lastElementChild.textContent
    ) {
      button.classList.add("active");
      lastTarget.classList.remove("active");
    }
    return button;
}

function loadPage(target, pageContent){
  pageContent.innerHTML = "";
  let pageName = target.lastElementChild.textContent;
  const isActive =  target.classList.contains("active");
  if(pageName
    == 'Inbox' && isActive
  ){
    Inbox(pageContent);
  }
  if (pageName == 'Add task' && isActive){
    Add(pageContent);
  }
  if (pageName.includes("notifications")){
    if (isActive){
      target.lastElementChild.textContent = "notifications";
    }
    pageContent.innerHTML = "<h1>Notifications</h1>"
  }
}

const navButtons = document.querySelectorAll("button");
let lastTarget = document.querySelector("button.active");
const pageContent = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", ()=> {
  setActiveState(lastTarget, lastTarget);
  loadPage(lastTarget, pageContent);
})

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastTarget = setActiveState(lastTarget, button);
    loadPage(lastTarget, pageContent);
  });
});

const dockButton = document.querySelector("span.dock");
const navBar = document.querySelector("nav");
dockButton.addEventListener("click", () => {
  navBar.classList.toggle("hide");
  
  if(navBar.classList.contains("hide")){
    dockButton.textContent = "dock_to_right";
  }
  else {
    dockButton.textContent = "dock_to_left";
  }
  pageContent.classList.toggle("expand");
})