import './style.css';
import template from './template.html';
import Data from "./Data.json";

const inbox =  document.createElement("div");
inbox.classList.add("page");
inbox.innerHTML = template;

export default inbox;