const path = require("path");
const friends = require("../models/friends.model");

console.log(path.join(__dirname, "..", "public"));

function postFriend(req, res) {
  if (!req.body.name) {
    res.status(400).json({ error: "Missing friend name" });
  }
  const newFriend = { id: friends.length, name: req.body.name };
  friends.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const id = parseInt(req.params.id);
  const index = friends.findIndex(client => client.id == id);
  console.log(id);
  if (index === -1) {
    res.status(404).json({ error: "Client not found" });
  } else {
    res.status(200).cookie("random-cookie", "123456").json(friends[index]);
  }
}

module.exports = { getFriend, getFriends, postFriend };
