import "./style.css";

function setActiveState(lastTarget, button){
   if (
      button.lastElementChild.textContent !=
      lastTarget.lastElementChild.textContent
    ) {
      button.classList.add("active");
      lastTarget.classList.remove("active")
    }
    return button;
}

function loadPage(target){
  if(target.lastElementChild.textContent 
    == 'Inbox' && target.classList.contains(".active")
  ){
    return Inbox;
  }
}

const navButtons = document.querySelectorAll("button:not(button.notifications)");
let lastTarget = document.querySelector("button.active:not(button.notifications)");
const pageContent = document.querySelector(".content");
let pageTarget;
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastTarget = setActiveState(lastTarget, button);
    pageContent.innerHTML="";
    pageTarget = loadPage(lastTarget);
    pageContent.appendChild(pageTarget);
  });
});

const notifications = document.querySelector(".notifications");
notifications.addEventListener("click", ()=> {
  notifications.classList.toggle("active");
  if (notifications.classList.contains("active")){
    notifications.textContent = "notifications";
  }
  else{
    notifications.textContent = "notifications_none";
  }
})