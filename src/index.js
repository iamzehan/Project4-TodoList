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

const navButtons = document.querySelectorAll("button:not(button.notifications)");
let lastTarget = document.querySelector("button.active:not(button.notifications)");
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastTarget = setActiveState(lastTarget, button)
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