import "./style.css";
import Inbox from './components/Inbox/index.js';

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
  if(target.lastElementChild.textContent 
    == 'Inbox' && target.classList.contains("active")
  ){
    pageContent.appendChild(Inbox);
  }
}

const navButtons = document.querySelectorAll("button:not(button.notifications)");
let lastTarget = document.querySelector("button.active:not(button.notifications)");
const pageContent = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", ()=> {
  setActiveState(lastTarget, lastTarget);
  loadPage(lastTarget, pageContent);
})

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastTarget = setActiveState(lastTarget, button);
    loadPage(lastTarget, pageContent);
    if (notifications.classList.contains("active")){
        notifications.classList.toggle("active");
      }
  });
});

function notificationsPageLoad(target, pageContent, lastTarget){
  pageContent.innerHTML = "";
  if (target.textContent == "notifications"){
    lastTarget.classList.remove("active");
    pageContent.innerHTML = "<h1>Notifications</h1>"
  }
}

const notifications = document.querySelector(".notifications");
notifications.addEventListener("click", ()=> {
  notifications.classList.toggle("active");
  if (notifications.classList.contains("active")){
    notifications.textContent = "notifications";
    notificationsPageLoad(notifications, pageContent, lastTarget);
  }
  else{
    lastTarget.classList.add("active");
    loadPage(lastTarget, pageContent);
    notifications.textContent = "notifications_none";
  }
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