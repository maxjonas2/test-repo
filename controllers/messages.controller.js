const path = require("path");

function getMesages(req, res) {
  // res.send("<p>Hello there, Albert</p>");
  res.sendFile(path.join(__dirname, "..", "public", "page.html"));
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = { getMesages, postMessage };
