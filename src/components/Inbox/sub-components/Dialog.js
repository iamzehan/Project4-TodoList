import Button from "./createButton";

// Here you basically do everything with a dialog

class Dialog {
  constructor() {
    this.dialog = document.createElement("dialog");
    this.fieldset = document.createElement("fieldset"); // ✅ store as a class property

    this.legend = document.createElement("legend");
    this.legend.textContent = "Add a new task";

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

    // Create buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn-container");

    const save = new Button(["common", "save"], "save", "Save").getButtonWithText();
    const cancel = new Button(["common", "mono", "cancel"], "cancel", "Cancel").getButtonWithText();

    buttonContainer.appendChild(save);
    buttonContainer.appendChild(cancel);
    this.dialog.appendChild(buttonContainer);

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

export {Dialog};