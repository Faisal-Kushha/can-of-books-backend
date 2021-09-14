const mongoose = require("mongoose");
// const BookModel = require("./BookHandler");
// main().catch((err) => console.log(err));
// let BookModel;
// async function main() {
// mongoose.connect(process.env.URL);
const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});
BookModel = mongoose.model("BookModel", bookSchema);
// laodData();
// }

async function laodData() {
  const secret = new BookModel({
    title: "The Secret",
    description:
      "It is a self-help book about the power of positive thinking by Rhonda Byrne",
    status: "Available",
    email: "fkushha89@hotmail.com",
  });
  const daVinci = new BookModel({
    title: "The Da Vinci Code",
    description: "Mystery thriller novel by Dan Brown",
    status: "Available",
    email: "fkushha89@hotmail.com",
  });
  const inferno = new BookModel({
    title: "Inferno",
    description: "Mystery thriller novel by Dan Brown",
    status: "Available",
    email: "fkushha89@hotmail.com",
  });
  await secret.save();
  await daVinci.save();
  await inferno.save();
  console.log(secret, "---------------------+++++++++--------");
}
// function bookHandler(request, response) {
//   const userEmail = request.query.email;
//   BookModel.find({ email: userEmail }, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       response.send(result);
//     }
//   });
// }
module.exports = BookModel;
