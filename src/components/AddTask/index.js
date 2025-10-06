import { AddTask } from "../sub-components/Dialog.js";

function Add(content){
    const task = new AddTask(content);
    task.open();
}
export default Add; 