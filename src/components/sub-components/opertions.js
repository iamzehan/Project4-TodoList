class FileOperations {
  constructor(data) {
    this.jsonData = data;
    this.fs = require("fs");
  }

  save() {
    this.writeFile("../Inbox/Data.json", jsonData, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  delete() {
    this.writeFile("../Trash/deleted.json", jsonData, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
}