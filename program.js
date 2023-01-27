const fs = require("fs");

// Read the contents of the file
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Print the contents of the file to the console
  console.log(data);
});
