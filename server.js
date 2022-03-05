const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const noteController = require("./controllers/note-controller");
const categoryController = require("./controllers/category-controller");
const userController = require("./controllers/user-controller");
const notificationController = require("./controllers/reminder-controller");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Database error", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

app.listen(PORT, () => {
  console.log("Server is Up and Running on PORT ${PORT}");
});

app.route("/").get((req, res) => {
  res.send("CTSE Mobile App Backend");
});

app.use("/note", noteController());
app.use("/category", categoryController());
app.use("/user", userController());
app.use("/reminder",notificationController());
