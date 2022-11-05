const express = require('express');
const cors = require('cors');
const { response } = require('express');
const axios = require('axios')
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const url = "http://aabf.docs.apiary.io/#reference/0/books/books/"
app.get("/books", async (req, res) =>  {
    await axios.get(url)
    .then(function(response){
        console.log(response)
        res.status(200).send(response.data);
    });
});

app.get("/bookSearch", async (req, res) => {
    await axios.get(`https://aabf.docs.apiary.io/#reference/0/books-search/books-search`)
    .then(function(response){
        console.log(response);
        res.send(response.data);
    })
})



app.listen(9000, () => {
  console.log("Session Started at port 9000");
});
