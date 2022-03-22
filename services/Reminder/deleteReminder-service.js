const Notification = require("../../models/reminder-model");

const deleteNotification = async (req, res) => {
  //check if the req body is empty
  const id = req.params.id;
  console.log(id);

  //delete product data from database
  await Note.findByIdAndDelete(id)
    .then((response) => {
      console.log("Data sucessfully deleted from the mongo db!");

      res.status(200).send(response);

      console.log("Response sent!");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = {
  deleteNotification,
};
