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

const navButtons = document.querySelectorAll("button");
let lastTarget = document.querySelector("button.active");
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastTarget = setActiveState(lastTarget, button)
  });
});