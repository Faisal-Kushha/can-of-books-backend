"use strict";
// const BookModel = require("./BookSchema");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bookHandler = require("./BookSchema");

const app = express();
app.use(cors());

const PORT = process.env.PORT;
// const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/books");
//   const bookSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     status: String,
//     email: String,
//   });
//   BookModel = mongoose.model("BookModel", bookSchema);
//   // laodData();
// }

// async function laodData() {
//   const secret = new BookModel({
//     title: "The Secret",
//     description:
//       "It is a self-help book about the power of positive thinking by Rhonda Byrne",
//     status: "Available",
//     email: "fkushha89@hotmail.com",
//   });
//   const daVinci = new BookModel({
//     title: "The Da Vinci Code",
//     description: "Mystery thriller novel by Dan Brown",
//     status: "Available",
//     email: "fkushha89@hotmail.com",
//   });
//   const inferno = new BookModel({
//     title: "Inferno",
//     description: "Mystery thriller novel by Dan Brown",
//     status: "Available",
//     email: "fkushha89@hotmail.com",
//   });
//   await secret.save();
//   await daVinci.save();
//   await inferno.save();
// }
// app.get("/", homeHandler);
// function homeHandler(request, respone) {
//   respone.send(console.log("Home page"));
// }
app.get("/books", bookHandler);
// function bookHandler(request, response) {
//   const email = request.query.email;
//   BookModel.find({ userEmail: email }, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       response.send(result);
//     }
//   });
// }

app.listen(PORT, () => console.log(`listening on ${PORT}`));
