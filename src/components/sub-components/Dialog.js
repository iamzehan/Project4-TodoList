import Button from "./createButton";

// Here you basically do everything with a dialog

class Dialog {
  constructor(legend, data) {

    // main data 
    this.data = data;
    this.dialog = document.createElement("dialog");
    this.fieldset = document.createElement("fieldset");

    this.legend = document.createElement("legend");
    this.legend.textContent = legend;

    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.className = "title";
    this.input.placeholder = "Title";

    this.textarea = document.createElement("textarea");
    this.textarea.name = "description";
    this.textarea.id = "description";
    this.textarea.placeholder = "Write here...";

    // Create buttons container
    this.buttonContainer = document.createElement("div");
    this.buttonContainer.classList.add("btn-container");

    this.save = new Button(
      ["common", "save"],
      "save",
      "Save"
    ).getButtonWithText();

    this.update = new Button(
      ["common", "update"],
      "update",
      "Update"
    ).getButtonWithText();

    this.cancel = new Button(
      ["common", "mono", "cancel"],
      "cancel",
      "Cancel"
    ).getButtonWithText();
    this.cancel.addEventListener("click", () => this.dialog.close());
  }

  open() {
    return this.dialog.showModal();
  }

  close() {
    return this.dialog.close();
  }
}

// Dialog Read View
class DialogReadOnly extends Dialog {
  constructor(inbox, data, task) {
    super(task.title, data);
    this.task = task;
    this.data = data;
    this.task = task;

    // the legend should contain the title of the task;
    this.fieldset.appendChild(this.legend);
    this.description = document.createElement("p");
    this.description.textContent = this.task.description;
    this.fieldset.appendChild(this.description);
    this.dialog.appendChild(this.fieldset);
    this.update.lastElementChild.textContent="Edit";
    this.cancel.lastElementChild.textContent = "Exit";
    this.buttonContainer.appendChild(this.cancel);
    this.buttonContainer.appendChild(this.update);
    this.dialog.appendChild(this.buttonContainer);
    inbox.appendChild(this.dialog);

    // event listener for edit
    this.update.addEventListener("click", () => {
      const update = new UpdateTask(inbox, this.data, this.task);
      update.cancel.lastElementChild.textContent = "Back";
      update.open();
    });
  }
}

// Dialog Write View
class DialogWrite extends Dialog {
  constructor(legend) {
    super(legend);
    // Build structure
    this.fieldset.appendChild(this.legend);
    this.fieldset.appendChild(this.input);
    this.fieldset.appendChild(this.textarea);
    this.dialog.appendChild(this.fieldset);
    this.buttonContainer.appendChild(this.cancel);
    this.dialog.appendChild(this.buttonContainer);
  }
}

// AddTasks 
class AddTask extends DialogWrite {
  constructor(inbox, legend = "Add New Task") {
    super(legend);
    this.buttonContainer.appendChild(this.save);
    inbox.appendChild(this.dialog);
  }
}

// UpdateTasks
class UpdateTask extends DialogWrite {
  constructor(inbox, data, task, legend = "Update Task") {
    super(legend, data);
    this.data = data;
    this.task = task;
    this.input.value = this.task.title;
    this.textarea.textContent = this.task.description;
    this.buttonContainer.appendChild(this.update);
    inbox.appendChild(this.dialog);
    this.update.addEventListener("click", ()=> {
      this.close();
    });
  }
}

export { AddTask, UpdateTask, DialogReadOnly };