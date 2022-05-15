// import messagesControler from "./controllers/messages.controller";
const express = require("express");
const path = require("path");

const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/messages.router");

const app = express();

const PORT = 3000;

let counter = 0;

// app.use((req, res, next) => {
//   const start = Date.now();
//   counter++;
//   next();
//   console.log(
//     `${req.method} ${req.url} ${
//       Date.now() - start
//     }ms. Request number ${counter}`
//   );
// });

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use("/home", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    color: "red",
    text: "This is an hbs-generated page"
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, "localhost", () => {
  console.log("listening on port " + PORT);
});
