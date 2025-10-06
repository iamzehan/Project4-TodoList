import { AddTask } from "../sub-components/Dialog.js";
import Inbox from "../Inbox/index.js";
function Add(content) {
  const task = new AddTask(content);
  task.open();
  task.cancel.addEventListener("click", () => {
    Inbox(content);
  });
  task.save.addEventListener("click", () => {
    Inbox(content);
    task.close();
  });
}
export default Add;