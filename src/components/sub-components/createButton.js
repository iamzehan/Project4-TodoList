export default class Button {
  constructor(classNames = [], icon, text) {
    this.classNames = classNames;
    this.icon = icon;
    this.text = text;
    this.button = document.createElement("button");
  }
  classAdd() {
    this.classNames.forEach((className) => {
      this.button.classList.add(className);
    });
  }
  getButtonWithText() {
    this.classAdd();
    this.button.innerHTML = `<span class="icon">${this.icon}</span><text>${this.text}</text>`;
    return this.button;
  }
  getButtonWithoutText() {
    this.classAdd();
    this.button.innerHTML = `<span class="icon">${this.icon}</span>`;
    return this.button;
  }
}