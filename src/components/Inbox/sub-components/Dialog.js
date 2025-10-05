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

    // Build structure
    this.fieldset.appendChild(this.legend);
    this.fieldset.appendChild(this.input);
    this.fieldset.appendChild(this.textarea);
    this.dialog.appendChild(this.fieldset);

    // Create buttons container
    this.buttonContainer = document.createElement("div");
    this.buttonContainer.classList.add("btn-container");
    const cancel = new Button(["common", "mono", "cancel"], "cancel", "Cancel").getButtonWithText();

    this.buttonContainer.appendChild(cancel);
    this.dialog.appendChild(this.buttonContainer);

    cancel.addEventListener("click", () => this.dialog.close());
  }

  open() {
    return this.dialog.showModal();
  }

  close() {
    return this.dialog.close();
  }
}

class AddTask extends Dialog {
  constructor(inbox, legend="Add New Task"){
    super(legend);
    const save = new Button(["common", "save"], "save", "Save").getButtonWithText();
    this.buttonContainer.appendChild(save);
    inbox.appendChild(this.dialog);
  }
}

class UpdateTask extends Dialog {
  constructor(inbox, data, legend="Update Task"){
    super(legend);
    this.data = data;
    this.input.value = this.data.title;
    this.textarea.textContent = this.data.description;
    const update = new Button(["common", "update"], "update", "Update").getButtonWithText();
    this.buttonContainer.appendChild(update);
    inbox.appendChild(this.dialog);
  }
}

export {AddTask, UpdateTask};