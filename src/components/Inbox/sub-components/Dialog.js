import Button from "./createButton";

// Here you basically do everything with a dialog

class Dialog {
  constructor(legend) {
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
  constructor(data){
    this.data = data;
    super(this.data.title); // the legend should contain the title of the task;
    this.fieldset.appendChild(this.legend);
    this.description = document.createElement("p");
    this.fieldset.appendChild(this.description);
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

class AddTask extends DialogWrite {
  constructor(inbox, legend = "Add New Task") {
    super(legend);
    const save = new Button(
      ["common", "save"],
      "save",
      "Save"
    ).getButtonWithText();
    this.buttonContainer.appendChild(save);
    inbox.appendChild(this.dialog);
  }
}

class UpdateTask extends DialogWrite {
  constructor(inbox, data, legend = "Update Task") {
    super(legend);
    this.data = data;
    this.input.value = this.data.title;
    this.textarea.textContent = this.data.description;
    const update = new Button(
      ["common", "update"],
      "update",
      "Update"
    ).getButtonWithText();
    this.buttonContainer.appendChild(update);
    inbox.appendChild(this.dialog);
  }
}

export { AddTask, UpdateTask };
