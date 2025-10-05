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

  getDialog(){
    return this.dialog;
  }

  open() {
    return this.dialog.showModal();
  }

  close() {
    return this.dialog.close();
  }
}

class AddTask extends Dialog {
  constructor(legend="Add New Task"){
    super(legend);
    const save = new Button(["common", "save"], "save", "Save").getButtonWithText();
    this.buttonContainer.appendChild(save);
  }
}

class UpdateTask extends Dialog {
  constructor(data, legend="Update Task"){
    super(legend);
    const update = new Button(["common", "update"], "update", "Update").getButtonWithText();
    this.buttonContainer.appendChild(update);
  }
}

export {AddTask, UpdateTask};