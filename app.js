const express = require("express");
const cors = require("cors");
const { response } = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/books", async (req, res) => {
  await axios
    .post("https://private-anon-2689b13390-aabf.apiary-mock.com/books")
    .then((response) => {
      res.status(200).send(response.data.body);
    });
});

app.get("/bookSearch", async (req, res) => {
  await axios
    .post(`https://private-anon-2689b13390-aabf.apiary-mock.com/books-search`)
    .then((response) => {
      res.send(response.data.body);
    });
});

app.listen(9000, () => {
  console.log("Session Started at port 9000");
});
